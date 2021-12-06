import sqlite3
def updateFollowers(follow, follower):
	sqliteConnection = sqlite3.connect('./db.sqlite3')
	cursor = sqliteConnection.cursor()
	followers = 0
	following = 0
	try:
		cursor.execute('SELECT numoffollowers FROM users WHERE username = ?;', [follow])
		followers = cursor.fetchone()
		followers = followers[0] + 1
		cursor.execute('SELECT numoffollowing FROM users WHERE username = ?;', [follower])
		following = cursor.fetchone()
		following = following[0] + 1
		print(followers)
	except:
	    print("Error")


	print("Connected to SQLite")

	sql_update_query = """Update users set numoffollowers = ? where username = ?"""
	data = (followers, follow)
	cursor.execute(sql_update_query, data)
	sqliteConnection.commit()
	print("Record Updated successfully")
	sql_update_query = """Update users set numoffollowing = ? where username = ?"""
	data = (following, follower)
	cursor.execute(sql_update_query, data)
	sqliteConnection.commit()

	cursor.close()

updateFollowers("hassan","jawadAzx")