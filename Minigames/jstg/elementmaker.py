from os import system

err = ""
confirm = False
confirmT = ""
elem = {}
txt = ""
while not txt in ["text", "declare"]:
    txt = input("What kind of element? (text/declare) > ")
if txt == "declare":
    elem = {
            "type":"declare",
            "conditions":[],
            "setFlag":"",
            "value":""
            }
elif txt == "text":
    elem = {
            "type":"text",
            "conditions":[],
            "text": "",
            "destination": "",
            "colors": ["#ffffff", "#000000"]
            }

while True:
    system("cls")
    print("element editor | edit <key>")
    print(err)
    err = ""
    print(elem)
    txt = input().split(" ")
    if len(txt) > 1:
        if txt[0] == "edit" and len(txt) == 3:
            if txt[1] in elem.keys():
                if txt[1] != "type":
                    if txt[1] == "text":
                        confirm = False
                        while not confirm:
                            txt2 = input("Insert text")
                            confirmT = ""
                            while not confirmT in ["y", "n"]:
                                confirmT = input("Are you sure you want to insert this text? (y/n) >")
                            if confirmT == "y":
                                confirm = True
                        elem[txt[1]] = txt2
                    if txt[1] == "conditions":
                        tempList = []
                        confirm = False
                        while not confirm:
                            system("cls")
                            print("Currently editing conditions... | add <conditionList> | remove <conditionIndex>")
                            txt2 = input("> ").split("\n")
                else:
                    err = "Cannot edit element type"
            else:
                err = "Key does not exist"