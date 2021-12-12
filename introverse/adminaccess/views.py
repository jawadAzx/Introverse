from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from .tables import *

@csrf_exempt
# Create your views here.
def adminaccess(request):
    if request.method == 'GET':
        query = request.GET.get('query')
        if (query == None):
            followers_table = sql_fetch_followers_table()
            users_table = sql_fetch_users_table()
            verses_table = sql_fetch_verses_table()
            passwords_table = sql_fetch_passwords_table()
            data = {
                'followers_table': followers_table,
                'users_table': users_table,
                'verses_table': verses_table,
                'passwords_table': passwords_table
            }
            print(data,"data")
            return render(request, 'adminaccess.html',{'adminaccess':json.dumps(data)})
        else:
            if (query == "block"):
                username = request.GET.get('username')
                block(username)
            elif (query == "unblock"):
                username = request.GET.get('username')
                unblock(username)
            return render(request, 'adminaccess.html')


