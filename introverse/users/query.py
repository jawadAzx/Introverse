import sqlite3

def getUserData(name):
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    # print("QUERY", len(name))
    temp = ""
    temp2 = ""
    try:
        c.execute('SELECT * FROM users WHERE username = ?;', [name])
        temp = c.fetchone()
    except:
        temp = "Username not found"
        # print(temp)
    try:
        c.execute('SELECT * FROM passwords WHERE username = ?;', [name])
        temp2 = c.fetchone()
    except:
        temp2 = "Password not found"
        # print(temp2)
        
    userDetails = temp + temp2
    
    # print("Check here",userDetails)
    return userDetails

def insert_users(user):
    # print("QUERY", user)
    conn = sqlite3.connect('./db.sqlite3')
    sql = ''' INSERT INTO users(username,name,birthday,numoffollowers,numoffollowing,blocked,email)
              VALUES(?,?,?,?,?,?,?) '''
    cur = conn.cursor()
    # print(user,"end")

    cur.execute(sql, (user))
    conn.commit()
    return cur.lastrowid

def insert_user_password(user):
    # print("QUERY", user)
    conn = sqlite3.connect('./db.sqlite3')
    sql = ''' INSERT INTO passwords(username,password)
              VALUES(?,?) '''
    cur = conn.cursor()
    # print(user,"end")

    cur.execute(sql, (user))
    conn.commit()
    return cur.lastrowid

