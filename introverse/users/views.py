from django.shortcuts import render
from .query import getUserData
from .query import insert_users, insert_user_password
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def users(request):
    if request.method == 'GET':
        data = request
        username = data.GET.get('username')
        # print("BRUG",data.GET.get('username'))
        user = None
        try:
            users = getUserData(username)
            user = {
                'username': users[0],
                'name': users[1],
                'birthday': users[2],
                'numoffollowers': users[3],
                'numoffollowing': users[4],
                'blocked': users[5],
                'email': users[6],
                'password': users[8]
            }
        except:
            # print("Incorrect username/password")
            user = "Incorrect username/password"
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
        passwordfunc.append(temp[-1])
        insert_users(userfunc)
        insert_user_password(passwordfunc)
        return render(request, 'users.html')

