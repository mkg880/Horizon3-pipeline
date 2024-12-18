import {
  createTeamAndAddCreator,
  getTeamsFromUserIDQuery,
  requestToJoinTeamQuery,
  getTeamAdminsAndCreatorsQuery,
  getTeamFromIDQuery,
  removeTeamMemberQuery,
  leaveTeamQuery,
  getPendingMemberApprovalsQuery,
  approveMemberRequest,
  getTeamMembersQuery,
  addTeamMemberQuery,
  getAllTeamsQuery,
  addRepoToTeamQuery,
  getCreatorFromTeadIDQuery,
} from "../database/queries/teamQueries.js";

import { getAccountFromUserIDQuery } from "../database/queries/accountQueries.js";

import { emailUser } from "../utils/emailFuncs.js";

async function createTeam(req: any, res: any) {
  console.log("Creating a team...");

  const { user_id, team_name, repo_hash } = req.body;
  if (!user_id || !team_name) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    // Find any existing teams with the same name

    const status = await createTeamAndAddCreator(team_name, user_id, repo_hash);
    if (!status) {
      throw Error("createTeamRoutine() failed");
    }

    return res.status(200).json({
      message: `Successfully created team ${team_name}`,
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: `Error creating team ${team_name}`,
    });
  }
}

async function addMember(req: any, res: any) {
  console.log(req.body);
  const { team_id, add_user_id } = req.body;
  if (!team_id || !add_user_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    // TODO add logic
    const current_members = await getTeamMembersQuery(team_id);
    if (!current_members) {
      throw Error("getTeamMembersQuery() failed");
    }
    if (
      current_members.find((member: any) => member.member_id == add_user_id)
    ) {
      return res.status(400).json({
        error: "User is already a member of the team.",
      });
    }
    const status = await addTeamMemberQuery(team_id, add_user_id);
    if (!status) {
      throw Error("addMember() failed");
    }

    //email the user that they have been added to the team
    const user = await getAccountFromUserIDQuery(add_user_id);
    if (!user) {
      console.error("User account doesn't exist: ", add_user_id);
      return res.status(404).json({
        error: "User account not found",
      });
    }
    const user_email = user.email;
    const user_name = user.username;
    const team_name = await getTeamFromIDQuery(team_id);
    if (!team_name) {
      throw Error("getTeamFromIDQuery() failed");
    }
    const team_name_string = team_name.team_name;
    const email = await emailUser(
      user_email,
      "Welcome to your team!",
      `User ${user_name} has been added to team ${team_name_string}.`,
    );
    if (!email) {
      throw Error("Error sending approval email");
    }

    return res.status(200).json({
      message: "Successfully added team member.",
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error adding new team member.",
    });
  }
}

async function getTeamsFromUserID(req: any, res: any) {
  const { user_id } = req.body;
  if (!user_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const query_result = await getTeamsFromUserIDQuery(user_id);
    if (!query_result) {
      throw Error("getTeamsFromUserID() failed");
    }

    return res.status(200).json({
      teams: query_result,
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error fetching teams.",
    });
  }
}

async function requestToJoinTeam(req: any, res: any) {
  let { team_id, user_id } = req.body;
  if (!team_id || !user_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const user_teams = await getTeamsFromUserIDQuery(user_id);
    if (!user_teams) {
      throw Error("getTeamsFromUserIDQuery() failed");
    }
    if (user_teams.find((team: any) => team.team_id == team_id)) {
      return res.status(400).json({
        error: "User is already a member of the team.",
      });
    }
    const query_result = await requestToJoinTeamQuery(team_id, user_id);
    if (!query_result) {
      throw Error("requestToJoinTeam() failed");
    }

    const team_info = await getTeamFromIDQuery(team_id);
    if (!team_info) {
      throw Error("getTeamFromIDQuery() failed");
    }

    // Email all admins/creators of the team
    const team_admins = await getTeamAdminsAndCreatorsQuery(team_id);
    if (!team_admins || team_admins.length === 0) {
      throw Error("No team admins found");
    }

    const user = await getAccountFromUserIDQuery(user_id);
    if (!user) {
      console.error("User account doesn't exist: ", user_id);
      return res.status(404).json({
        error: "User account not found",
      });
    }

    const sendEmailPromises = team_admins.map((admin: any) => {
      return emailUser(
        admin.email,
        "New Team Join Request",
        `User ${user.username} has requested to join your team ${team_info.team_name}.`,
      );
    });

    await Promise.all(sendEmailPromises);

    return res.status(200).json({
      message: "Successfully requested to join team.",
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error requesting to join team.",
    });
  }
}

async function approveTeamRequest(req: any, res: any) {
  let { team_id, user_id, approve } = req.body;

  if (!team_id || !user_id || approve === undefined) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    // Get user information
    const user = await getAccountFromUserIDQuery(user_id);
    if (!user) {
      console.error("User account doesn't exist: ", user_id);
      return res.status(404).json({
        error: "User account not found",
      });
    }

    if (approve) {
      const query_result = await approveMemberRequest(team_id, user_id);
      if (!query_result) {
        throw Error("approveMemberRequest() failed");
      }

      // Email user that their request was approved
      const email_status = await emailUser(
        user.email,
        "Team Request Approved",
        `Your request to join team ${team_id} has been approved.`,
      );

      if (!email_status) {
        throw Error("Error sending approval email");
      }

      return res.status(200).json({
        message: "Successfully approved team request.",
      });
    } else {
      // Email user that their request was denied
      const email_status = await emailUser(
        user.email,
        "Team Request Denied",
        `Your request to join team ${team_id} has been denied.`,
      );

      if (!email_status) {
        throw Error("Error sending denial email");
      }

      const query_result = await leaveTeamQuery(team_id, user_id);
      if (!query_result) {
        throw Error("leaveTeam() failed");
      }

      return res.status(200).json({
        message: "Successfully denied team request.",
      });
    }
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error approving team request.",
    });
  }
}

async function getPendingMemberApprovals(req: any, res: any) {
  let { team_id } = req.body;
  if (!team_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const query_res = await getPendingMemberApprovalsQuery(team_id);
    if (!query_res) {
      throw Error("getPendingMemberApprovals() failed");
    }

    return res.status(200).json({
      pending_approvals: query_res,
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error fetching pending member approvals.",
    });
  }
}

async function leaveTeam(req: any, res: any) {
  let { team_id, user_id } = req.body;
  if (!team_id || !user_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const member_user = await getAccountFromUserIDQuery(user_id);
    if (!member_user) {
      console.error("User account doesn't exist: ", user_id);
      return res.status(404).json({
        error: "User account not found",
      });
    }

    const query_result = await leaveTeamQuery(team_id, user_id);
    if (!query_result) {
      throw Error("leaveTeam() failed");
    }

    const creator_id = await getCreatorFromTeadIDQuery(team_id);
    if (!creator_id) {
      throw Error("getCreatorFromTeadIDQuery() failed");
    }

    const user = await getAccountFromUserIDQuery(creator_id);
    if (!user) {
      console.error("User account doesn't exist: ", user_id);
      return res.status(404).json({
        error: "Error fetching team creator data",
      });
    }

    // email the user that they have been removed from the team
    const email_status = await emailUser(
      user.email,
      "Team Member Removed",
      `User ${member_user.username} has left team ${team_id}.`,
    );

    if (!email_status) {
      throw Error("Error sending removal email");
    }

    return res.status(200).json({
      message: "Successfully left team.",
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error leaving team.",
    });
  }
}

async function removeTeamMember(req: any, res: any) {
  let { team_id, user_id, member_id } = req.body;
  if (!team_id || !user_id || !member_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const query_result = await removeTeamMemberQuery(
      team_id,
      user_id,
      member_id,
    );
    if (!query_result) {
      res.status(400).json({
        error: "You are not an admin or creator of the team!",
      });
    }

    // email the user that they have been removed from the team
    const user = await getAccountFromUserIDQuery(user_id);
    if (!user) {
      console.error("User account doesn't exist: ", user_id);
      return res.status(404).json({
        error: "User account not found",
      });
    }

    console.log(user);

    const email_status = await emailUser(
      user.email,
      "Team Member Removed",
      `You have been removed from team ${team_id}.`,
    );

    if (!email_status) {
      throw Error("Error sending removal email");
    }

    return res.status(200).json({
      message: "Successfully removed team member.",
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error removing team member.",
    });
  }
}

async function getTeamMembers(req: any, res: any) {
  let { team_id } = req.body;
  if (!team_id) {
    console.error("Missing request fields.");
    return res.status(400).json({
      error: "Missing request fields.",
    });
  }

  try {
    const query_result = await getTeamMembersQuery(team_id);
    if (!query_result) {
      throw Error("getTeamMembers() failed");
    }
    return res.status(200).json({
      members: query_result,
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error fetching team members.",
    });
  }
}

async function getAllTeams(req: any, res: any) {
  try {
    const query_result = await getAllTeamsQuery();
    if (!query_result) {
      throw Error("getAllTeams() failed");
    }
    return res.status(200).json({
      teams: query_result,
    });
  } catch (error) {
    console.log("Failed: ", error);
    return res.status(500).json({
      error: "Error fetching all teams.",
    });
  }
}

export {
  createTeam,
  addMember,
  getTeamsFromUserID,
  requestToJoinTeam,
  approveTeamRequest,
  removeTeamMember,
  leaveTeam,
  getPendingMemberApprovals,
  getTeamMembers,
  getAllTeams,
};
