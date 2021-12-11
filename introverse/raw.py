import sqlite3
import os
from sqlite3 import Error

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)
    return conn

def create_table(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)
        

database = os.getcwd() + "\db.sqlite3"

sql_create_users_table = """ CREATE TABLE IF NOT EXISTS users(
    username text not null PRIMARY KEY,
    name text not null,
    birthday date not null,
    numoffollowers integer,
    numoffollowing integer,
    blocked boolean,
    email text not null UNIQUE
); """

sql_create_passwords_table = """ CREATE TABLE IF NOT EXISTS passwords(
    username text not null,
    password text not null,
    FOREIGN KEY (username) REFERENCES users(username)
    ); """

sql_create_verses_table = """ CREATE TABLE IF NOT EXISTS verses(
    username text not null,
    id integer not null UNIQUE ,
    verse text not null,
    numofcomments integer,
    numoflikes integer,
    FOREIGN KEY (username) REFERENCES users(username)
    ); """
sql_create_followers_table = """ CREATE TABLE IF NOT EXISTS followers(
    username text not null,
    follower text not null UNIQUE,
    FOREIGN KEY (username) REFERENCES users(username)
    ); """
# create a database connection
conn = create_connection(database)

# create tables
if conn is not None:
    print("NOT NONE")
    print(database)
    # create projects table
    create_table(conn, sql_create_users_table)
    create_table(conn, sql_create_passwords_table)
    create_table(conn, sql_create_verses_table)
    create_table(conn, sql_create_followers_table)

    print("MADE")
else:
    print("Error! cannot create the database connection.")

