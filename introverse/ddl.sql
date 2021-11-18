PRAGMA foreign_keys = ON;

CREATE TABLE user(
    username text not null
    firstname text not null
    lastname text not null
    birthday date not null
    numoffollowers integer
    numoffollowing integer
    blocked boolean
    email text not null
    PRIMARY KEY(username)

);
CREATE TABLE passwords(
    username text not null
    hashedpassword text not null
    PRIMARY KEY(username)
);