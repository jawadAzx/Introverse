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
        # print(data)
        username = data.GET.get('username')
        # print(username)
        verses = None
        verse_dict = {}
        verses_list = []
        id_list = []
        try:
            verses = get_verse(username)
        except:
            print("ERROR RETRIEVING VERSES")
        # print(verses[0][0], "LOOK HERE")
        for verse in verses:
            verses_list.append(verse[0])
            id_list.append(verse[1])
        verse_dict["verse"] = verses_list
        verse_dict["id"] = id_list
        # print(verse_dict)
        # to_ret = {
        # 'verses': verse_dict,
        # }
        print(verse_dict)
        return render(request, 'verses.html', {'verses': json.dumps(verse_dict)})

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

