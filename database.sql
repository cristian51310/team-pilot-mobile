-- create DB
sqlite3 database.db

-- create table
CREATE TABLE IF NOT EXISTS Notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL
);