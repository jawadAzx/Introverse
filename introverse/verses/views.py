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
            print("ERROR RETRIEVING VERSES")
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
            verses = get_verse(username)
            verse_dict = {}
            verses_list = []
            id_list = []
            like_list = []
            comment_count = []
        
            # username = data.GET.get('username')
            # verses = None
            # verse_dict = {}
            # verses_list = []
            # id_list = []
            # try:
            #     verses = get_verse(username)
            # except:
            #     print("ERROR RETRIEVING VERSES")
            # for verse in verses:
            #     verses_list.append(verse[0])
            #     id_list.append(verse[1])
            # verse_dict["verse"] = verses_list
            # verse_dict["id"] = id_list
            # return render(request, 'verses.html', {'verses': json.dumps(verse_dict)})


            for verse in verses:
                verses_list.append(verse[0])
                id_list.append(verse[1])
                comment_count.append(verse[2])
                like_list.append(verse[3])
                
            verse_dict["verse"] = verses_list
            verse_dict["id"] = id_list
            verse_dict["like"] = like_list
            verse_dict["comment"] = comment_count

            return render(request, 'verses.html', {'verses': json.dumps(verse_dict)})

    elif request.method == 'POST':
        data = request.body.decode('utf-8')
        newData = data.split(",")
        cond = newData[1][1:-2]
        if (cond == "put1"):
            #For put request
            id = newData[0][1:]
            add_like(int(id))
        
        elif (cond == "put2"):
            id = newData[0][1:]
            add_comment_number(int(id))

        else:
            temp = data[1:-1]
            temp = temp.replace('"', '')
            temp = tuple(temp.split(','))
            data_to_add = temp[0]
            username = temp[1]
            # print(data_to_add)
            insert_verse(data_to_add, username)
        
        return render(request, 'verses.html')

    # elif request.method == 'PUT':
    #     data = request
    #     readbytes = data['wsgi.input'].read() # returns bytes object
    #     readstr = readbytes.decode('utf-8')
    #     print("Verses wala data ", readstr)
            # pass

        # if todo != None and todo[0] == 'delete':
        #     verse_id = todo[1].split("=")
        #     verse_id = verse_id[1]
        #     username = todo[2].split("=")
        #     username = username[1]
        #     delete_verse(username, verse_id)
        #     data = "Deleted"
        #     return render(request, 'verses.html', {'data': data})
        # else:
        #     username = data.GET.get('username')
        #     verses = None
        #     verse_dict = {}
        #     verses_list = []
        #     id_list = []
        #     try:
        #         verses = get_verse(username)
        #     except:
        #         print("ERROR RETRIEVING VERSES")
        #     for verse in verses:
        #         verses_list.append(verse[0])
        #         id_list.append(verse[1])
        #     verse_dict["verse"] = verses_list
        #     verse_dict["id"] = id_list
        #     return render(request, 'verses.html', {'verses': json.dumps(verse_dict)})

    # elif request.method == 'POST':
    #     data = request.body.decode('utf-8')
    #     temp = data[1:-1]
    #     temp = temp.replace('"', '')
    #     temp = tuple(temp.split(','))
    #     data_to_add = temp[0]
    #     username = temp[1]
    #     insert_verse(data_to_add, username)
        
    #     return render(request, 'verses.html')


