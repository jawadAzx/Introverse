from django.shortcuts import render
from .query import getUserData
from .query import insert_users, insert_user_password
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import json

import uuid
import hashlib
 
def hash_password(password):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + password.encode()).hexdigest() + ':' + salt
    
def check_password(hashed_password, user_password):
    password, salt = hashed_password.split(':')
    return password == hashlib.sha256(salt.encode() + user_password.encode()).hexdigest()

@csrf_exempt
def users(request):
    if request.method == 'GET':
        data = request
        query = data.GET.get('query')
        # print(query, follow, follower, "LOOK HERE")
        if query == None:
            username = data.GET.get('username')
            password = data.GET.get('password')
            # password = hash_password(password)

            user = None
            try:
                users = getUserData(username)
                what = "None"
                # print(password, users[8])

                if (check_password(users[8], password)):
                    print("User found")
                    what = "User found"
                user = {
                    'username': users[0],
                    'name': users[1],
                    'birthday': users[2],
                    'numoffollowers': users[3],
                    'numoffollowing': users[4],
                    'blocked': users[5],
                    'email': users[6],
                    'SIGNINCYKA': what
                }
            except:
                # print("Incorrect username/password")
                user = "Incorrect username/password"
            # print("BRUh", user)

            return render(request, 'users.html', {'users': json.dumps(user)})
        elif query != None:
            # print("IAM GOING TO RETURN QUERY")
            # print("BRUG",data.GET.get('username'))
            user = None
            try:
                users = getUserData(query)
                user = dict()
                user = {
                    'username': users[0],
                    'name': users[1],
                    'birthday': users[2],
                    'numoffollowers': users[3],
                    'numoffollowing': users[4],
                    'email': users[6],
                }
            except:
                # print("Incorrect username/password")
                user = "User Does not exist"
            # print("BRUh", user)
            return render(request, 'users.html', {'users': json.dumps(user)})



    elif request.method == 'POST':
        data = request.body.decode('utf-8')
        temp = data[1:-1]
        temp = temp.replace('"', '')
        temp = tuple(temp.split(','))
        userfunc = temp[0:-1]
        passwordfunc = list()
        passwordfunc.append(temp[0])
        hash_object = hash_password(temp[-1])
        passwordfunc.append(hash_object)
        insert_users(userfunc)
        insert_user_password(passwordfunc)
        return render(request, 'users.html')

