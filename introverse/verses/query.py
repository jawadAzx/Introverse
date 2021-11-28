import sqlite3

def insert_verse(verse):
    print("Verse", verse)
    conn = sqlite3.connect('./db.sqlite3')
    sql = ''' INSERT INTO verses(username,id,verse)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    print(verse,"end")

    cur.execute(sql, (verse))
    conn.commit()
    return cur.lastrowid

def get_verse(user):
    print("USER", user)
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('SELECT verse FROM verses WHERE username = ?;', [user])
    temp = cur.fetchone()
    print(temp,"end")

    return temp

