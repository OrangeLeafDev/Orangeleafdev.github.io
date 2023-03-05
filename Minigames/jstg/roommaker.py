from tkinter import filedialog
from os import system
import re

dictTree = {}
defCol = ["#ffffff", "#000000"]
keySel = ""
err = ""

def print_dict_tree(data, indent=0):
    for key, value in data.items():
        if isinstance(value, dict):
            print(f"{' ' * indent}'{key}': {{")
            print_dict_tree(value, indent+2)
            print(f"{' ' * indent}}}")
        elif isinstance(value, list):
            print(f"{' ' * indent}{key}: [")
            for i, item in enumerate(value):
                print(f"{' ' * (indent+2)}{i}: {repr(item)}")
            print(f"{' ' * indent}]")
        else:
            print(f"{' ' * indent}{key}: {repr(value)}")

def select(ky):
    global keySel, err
    if ky in dictTree:
        keySel = ky
    else:
        err = f"'{ky}' does not exist in the rooms tree."


while True:
    system("cls")
    print("Room Editor | newroom <roomname> | select <roomname> | add <element> (text/declare) | edit <elementindex> <arg> <value>\nremove <elementindex> |\n You can use double quotes for multi-word parameters.")
    print_dict_tree(dictTree)
    print(f"\n{err}")
    err = ""
    txt = [s.replace('"', '') for s in re.findall(r'\".+?\"|\[.+?\]|\{.+?\}|\S+', input(f"R_Edit>{keySel}> "))]
    for tx in txt:
        txb = tx
        try:
            txb = eval(tx) if type(eval(tx)) != function else txt
        except:
            pass
        txt[txt.index(tx)] = txb
    if txt[0] == "prt":
        print(dictTree)
    if len(txt) > 1:
        if txt[0] == "newroom":
            if not txt[1] in dictTree and not txt[1] in [" ", ""]:
                dictTree[txt[1]] = ["Placeholder Description"]
                select(txt[1])
            elif not txt[1] in [" ", ""]:
                txt2 = ""
                while not txt2 in ["y", "n"]:
                    txt2 = input(f"Are you sure you want to overwrite '{txt[1]}'? (y/n) > ")
                if txt2 == "y":
                    dictTree[txt[1]] = ["Placeholder Description"]
                    select(txt[1])
            else:
                err = "Blank room names are not permitted."
        if txt[0] == "select":
            select(txt[1])
        if txt[0] == "add":
            if keySel in dictTree:
                if txt[1] == "text":
                    elem = {
                        "type":"text",
                        "conditions":[],
                        "text": "",
                        "destination": "",
                        "colors": defCol
                        }
                    dictTree[keySel].append(
                        elem
                    )
                elif txt[1] == "declare":
                    dictTree[keySel].append(
                        {
                        "type":"declare",
                        "conditions":[],
                        "setFlag":"",
                        "value":""
                        }
                    )
                else:
                    err = f"Element type {txt[0]} does not exist."
            else:
                err = "Impossible blank room name / Make a room to get started"
        if txt[0] == "remove":
            if keySel in dictTree:
                try:
                    txt[1] = int(txt[1])
                    if txt[1] < len(dictTree[keySel]) and txt[1] > -1:
                        pass
                    else:
                        err = "Element does not exist."
                except:
                    err = "Invalid index"
            else:
                err = "Impossible black room name / Make a room to get started"
    else:
        if not (txt[0] == "" or " " in txt[0]): err = f"'{txt[0]}' was not given arguements."