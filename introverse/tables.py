import sqlite3

con = sqlite3.connect('db.sqlite3')

def sql_fetch_users_table(con):

    cur = con.cursor()
    cur.execute('SELECT * FROM  users')

    rows = cur.fetchall()

    for row in rows:

        print(row)
def sql_fetch_followers_table(con):

    cur = con.cursor()
    cur.execute('SELECT * FROM  followers')

    rows = cur.fetchall()

    for row in rows:

        print(row)

def sql_fetch_verses_table(con):

    cur = con.cursor()
    cur.execute('SELECT * FROM  verses')

    rows = cur.fetchall()

    for row in rows:

        print(row)
