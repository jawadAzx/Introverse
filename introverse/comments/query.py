import sqlite3

def insert_comment(username, id, comment):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()

    comment_id = 0
    try:
        cur.execute('SELECT comment_id FROM comments WHERE username=? AND id = ?;', (username, id))
        comment_id = cur.fetchall()
        if comment_id == None or len(comment_id) == 0:
            comment_id = 0
        else:
            comment_id = comment_id[-1][0] + 1
    except:
        print("Error")

    
    sql = ''' INSERT INTO comments(username,id,comment_id, comment)
              VALUES(?,?,?,?) '''

    data = (username,id,comment_id, comment)
    cur.execute(sql, (data))
    conn.commit()
    return cur.lastrowid

def get_comments(id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('SELECT comment FROM comments WHERE id = ?;', [id])
    temp = cur.fetchall()
    print(temp,"get comments")
    return temp