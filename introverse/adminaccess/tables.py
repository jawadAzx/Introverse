import sqlite3


def sql_fetch_users_table():
    con = sqlite3.connect('./db.sqlite3')

    cur = con.cursor()
    cur.execute('SELECT * FROM  users')

    rows = cur.fetchall()
    return rows
def sql_fetch_followers_table():
    con = sqlite3.connect('./db.sqlite3')

    cur = con.cursor()
    cur.execute('SELECT * FROM  followers')

    rows = cur.fetchall()

    return rows


def sql_fetch_verses_table():
    con = sqlite3.connect('./db.sqlite3')

    cur = con.cursor()
    cur.execute('SELECT * FROM  verses')

    rows = cur.fetchall()
    return rows

def sql_fetch_passwords_table():
    con = sqlite3.connect('./db.sqlite3')

    cur = con.cursor()
    cur.execute('SELECT * FROM  passwords')

    rows = cur.fetchall()
    return rows

def block(username):
    con = sqlite3.connect('./db.sqlite3')
    cur = con.cursor()
    try:
        cur.execute('UPDATE users SET blocked = 1 WHERE username = ?', (username,))
        con.commit()
        con.close()
    except:
        return False
    return True

def unblock(username):
    con = sqlite3.connect('./db.sqlite3')
    cur = con.cursor()
    try:
        cur.execute('UPDATE users SET blocked = 0 WHERE username = ?', (username,))
        con.commit()
        con.close()
    except:
        return False
    return True