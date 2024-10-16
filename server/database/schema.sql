-- Create user table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  verified INT DEFAULT 0    -- Flag to check if account is verified
);

-- Create user verification table
CREATE TABLE user_verification (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,   -- User associated with verification code
  code INT NOT NULL,      -- Verification code

  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE  -- foreign key to users table with automatic delete
);

-- Create teams table
CREATE TABLE teams (
  team_id SERIAL PRIMARY KEY,
  team_name VARCHAR(255) NOT NULL
);

CREATE TABLE repos (
  id SERIAL PRIMARY KEY,
  github_url VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  owner VARCHAR(255) NOT NULL,
  private INT,  -- Flag for if repo is private (0 = public, 1 = private)
  token VARCHAR(255),
  creator_id INT,
  team_id INT,

  FOREIGN KEY (creator_id) REFERENCES users (user_id) ON DELETE CASCADE,  -- foreign key to users table
  FOREIGN KEY (team_id) REFERENCES teams (team_id) ON DELETE CASCADE
);

-- Create reports table
CREATE TABLE reports (
  report_id SERIAL PRIMARY KEY,
  report_url VARCHAR(255) NOT NULL,   -- URL to S3 report object
  creator_id INT NOT NULL,            -- references user_id in users table
  team_id INT NOT NULL,               -- references team_id in teams table

  FOREIGN KEY (creator_id) REFERENCES users (user_id) ON DELETE CASCADE,  -- foreign key to users table with automatic delete
  FOREIGN KEY (team_id) REFERENCES teams (team_id) ON DELETE CASCADE      -- foreign key to teams table with automatic delete
);

-- Create join table between users and teams
CREATE TABLE team_members (
  member_id INT,
  team_id INT,
  member_role VARCHAR(255) NOT NULL,

  PRIMARY KEY (member_id, team_id),   -- primary key is a combination of team and member
  FOREIGN KEY (member_id) REFERENCES users (user_id) ON DELETE CASCADE, -- foreign key to users table with automatic delete
  FOREIGN KEY (team_id) REFERENCES teams (team_id) ON DELETE CASCADE    -- foreign key to teams table with automatic delete
);
