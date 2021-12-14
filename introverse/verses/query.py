import sqlite3

def insert_verse(verse,username):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    id = 0
    
    try:
        cur.execute('SELECT id FROM verses;')
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
    cur.execute('SELECT verse,id,numofcomments,numoflikes,username FROM verses WHERE username = ?;', [user])
    temp = cur.fetchall()
    print(temp,"end")
    return temp

def get_all_verse(user):
    print("USER", user)
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('SELECT verse,id,numofcomments,numoflikes,username FROM verses WHERE username NOT LIKE ?;', [user])
    temp = cur.fetchall()
    # print(temp,"end")
    return temp

def add_like(id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    likes = 0
    cur.execute('SELECT numoflikes FROM verses WHERE id = ?;' ,[id])
    likes = cur.fetchall()
    likes = likes[0][0]
    if likes == None or likes == 0:
        likes = 1
    else:
        likes = likes + 1

    cur.execute('UPDATE verses SET numoflikes = ? WHERE id = ?', (likes,id))
    conn.commit()
    return cur.lastrowid


def delete_verse(username,id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('DELETE FROM verses WHERE id = ? AND username = ?;', (id, username))
    conn.commit()

def add_comment_number(id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    comments = 0
    cur.execute('SELECT numofcomments FROM verses WHERE id = ?;' ,[id])
    comments = cur.fetchall()
    comments = comments[0][0]
    if comments == None or comments == 0:
        comments = 1
    else:
        comments = comments + 1

    cur.execute('UPDATE verses SET numofcomments = ? WHERE id = ?', (comments,id))
    conn.commit()
    return cur.lastrowid