from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from .query import *

@csrf_exempt
# Create your views here.
def verses(request):
    if request.method == 'GET':
        data = request
        
        todo = data.GET.get('method')
        try:
            todo = todo.split("?")
        except:
            pass

        if todo != None and todo[0] == 'delete':
            verse_id = todo[1].split("=")
            verse_id = verse_id[1]
            username = todo[2].split("=")
            username = username[1]
            delete_verse(username, verse_id)
            data = "Deleted"
            return render(request, 'verses.html', {'data': data})
        else:
            username = data.GET.get('username')
            verses = None
            verse_dict = {}
            verses_list = []
            id_list = []
            try:
                verses = get_verse(username)
            except:
                print("ERROR RETRIEVING VERSES")
            for verse in verses:
                verses_list.append(verse[0])
                id_list.append(verse[1])
            verse_dict["verse"] = verses_list
            verse_dict["id"] = id_list
            return render(request, 'verses.html', {'verses': json.dumps(verse_dict)})

    elif request.method == 'POST':
        data = request.body.decode('utf-8')
        temp = data[1:-1]
        temp = temp.replace('"', '')
        temp = tuple(temp.split(','))
        data_to_add = temp[0]
        username = temp[1]
        insert_verse(data_to_add, username)
        
        return render(request, 'verses.html')


