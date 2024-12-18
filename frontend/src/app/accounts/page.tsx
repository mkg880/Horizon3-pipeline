"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./accounts.css";

const UserAcc: React.FC = () => {
  const [newUsername, setNewUsername] = useState<string>("");
  const [userErrorMsg, setUserErrorMsg] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>("");
  const [deleteConfirm, setDeleteConfirm] = useState<string>("");
  const [deleteErrorMsg, setDeleteErrorMsg] = useState<string>("");

  const userId = sessionStorage.getItem("user_id");
  const username = sessionStorage.getItem("username");

  const router = useRouter();

  const handleChangeUsernameSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserErrorMsg("");
    try {
      const response = await fetch("/api/user/change_username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, new_username: newUsername }),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("username", newUsername);
        setUserErrorMsg(`Success! Your new username is: ${newUsername}`);
      } else {
        setUserErrorMsg(data.error || "An error occurred while changing username");
      }
    } catch (error) {
      setUserErrorMsg("An error occurred. Please try again.");
    }
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChangePasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordErrorMsg("");
    if (!validatePassword(newPassword)) {
      setPasswordErrorMsg(
        "Password must contain an uppercase letter, a digit, a special character, and be at least 8 characters long."
      );
      return;
    }
    try {
      const response = await fetch("/api/user/change_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, old_password: oldPassword, new_password: newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        setPasswordErrorMsg("Password changed successfully!");
      } else {
        setPasswordErrorMsg(data.error || "An error occurred while changing password");
      }
    } catch (error) {
      setPasswordErrorMsg("An error occurred. Please try again.");
    }
  };

  const handleDeleteAccountSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDeleteErrorMsg("");
    if (username !== deleteConfirm) {
      setDeleteErrorMsg("Username does not match your current username!");
      return;
    }
    try {
      const response = await fetch("/api/user/delete_account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.clear();
        router.push("/signup");
      } else {
        setDeleteErrorMsg(data.error || "An error occurred while deleting account");
      }
    } catch (error) {
      setDeleteErrorMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="user-acc-container">
      <div className="user-acc">
        <div className="ChangeUsername">
          <h1 className="accounts">Change Username</h1>
          <form onSubmit={handleChangeUsernameSubmit}>
            <input
              type="text"
              placeholder="New Username"
              onChange={(e) => setNewUsername(e.target.value)}
              value={newUsername}
              required
            />
            <button type="submit">Change Username</button>
          </form>
          {userErrorMsg && <p className="error-message">{userErrorMsg}</p>}
        </div>
        <div className="ChangePassword">
          <h1 className="accounts">Change Password</h1>
          <form onSubmit={handleChangePasswordSubmit}>
            <input
              type="password"
              placeholder="Old Password"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
            />
            <button type="submit">Change Password</button>
          </form>
          {passwordErrorMsg && <p className="error-message">{passwordErrorMsg}</p>}
        </div>
        <div className="DeleteAccount">
          <h1 className="accounts">Delete Account</h1>
          <h2>Insert your username below to confirm deletion!</h2>
          <form onSubmit={handleDeleteAccountSubmit}>
            <input
              type="text"
              placeholder="Type your username here!"
              onChange={(e) => setDeleteConfirm(e.target.value)}
              value={deleteConfirm}
              required
            />
            <button type="submit">Delete Account</button>
          </form>
          {deleteErrorMsg && <p className="error-message">{deleteErrorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserAcc;
