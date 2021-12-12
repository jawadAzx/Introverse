import sqlite3

def delete_verse(username,id):
    conn = sqlite3.connect('./db.sqlite3')
    cur = conn.cursor()
    cur.execute('DELETE FROM verses WHERE id = ? AND username = ?;', (id, username))
    conn.commit()
    print("Deleted")
    return cur.lastrowid
delete_verse("jawadAzx",0)