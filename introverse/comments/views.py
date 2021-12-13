from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from .query import *

@csrf_exempt
# Create your views here.
def comments(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        data = data.split(",")
        id = int(data[1])
        comment = data[0][2:-1]
        username = data[2][1:-2]
        insert_comment(username, id, comment)

        return render(request, 'comments.html')

    if request.method == "GET":
        id = request.GET.get('id')
        comments = get_comments(id)
        comments_dict = {}
        comments_dict["comments"] = comments

        return render(request, 'comments.html', {'comments': json.dumps(comments_dict)})







