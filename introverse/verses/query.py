import sqlite3

def insert_verse(verse,username):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    id = 0
    try:
        cur.execute('SELECT id FROM verses WHERE username = ?;', [username])
        id = cur.fetchall()
        if id == None or len(id) == 0:
            id = 0
        else:
            id = id[-1][0] + 1
    except:
        print("Error")
   
    sql = ''' INSERT INTO verses(username,id,verse,numofcomments,numoflikes)
              VALUES(?,?,?,?,?) '''
   
    data = (username,id,verse,0,0)
    cur.execute(sql, (data))
    conn.commit()
    return cur.lastrowid

def get_verse(user):
    print("USER", user)
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('SELECT verse,id FROM verses WHERE username = ?;', [user])
    temp = cur.fetchall()
    return temp

def delete_verse(username,id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('DELETE FROM verses WHERE id = ? AND username = ?;', (id, username))
    conn.commit()
