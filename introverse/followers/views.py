from django.shortcuts import render
from .query import updateFollowers
import json
from .query import updateFollowers
# Create your views here.


def followers(request):
    if request.method == 'GET':
        # print("UN FLOOF")
        data = request
        follow = data.GET.get('follow')
        follower = data.GET.get('follower')
        if follow != None and follower != None:
            # print(follow, follower, "CHECK ME ")
            result = updateFollowers(follow, follower)
            print(result, "FUCK ME")
            if result == True:
                res = {
                    'status': 'success',
                }
                return render(request, 'followers.html', {'followers': json.dumps(res)})
            else:
                res = {
                    'status': 'fail',
                }
                return render(request, 'followers.html', {'followers': json.dumps(res)})
