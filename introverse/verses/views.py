from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from .query import insert_verse
from .query import get_verse

@csrf_exempt
# Create your views here.
def verses(request):
    if request.method == 'GET':
        data = request
        username = data.GET.get('username')
        print(username)
        verses = None
        verse_list = []
        try:
            verses = get_verse(username)
        except:
            print("ERROR RETRIEVING VERSES")
        for verse in verses:
            verse_list.append(verse[0])
        print(verse_list)
        to_ret = {
        'verses': verse_list,
        }
        return render(request, 'verses.html', {'verses': json.dumps(to_ret)})

    elif request.method == 'POST':
        data = request.body.decode('utf-8')
        temp = data[1:-1]
        temp = temp.replace('"', '')
        temp = tuple(temp.split(','))
        data_to_add = temp[0]
        username = temp[1]
        # print(data_to_add)
        insert_verse(data_to_add, username)
        
        return render(request, 'verses.html')

