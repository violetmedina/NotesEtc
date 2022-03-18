
import pickle

phonebook = {}

with open("phonebook.pickle", "rb") as fh:
    phonebook = pickle.load(fh)
    

def add_contact(name, phone):
    phonebook[name] = phone


run_phonebook = True

while run_phonebook:

    selection = int(input(f'''
    Electronic Phone Book
    =====================
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entries
    5. Quit
    '''))

    if selection == 1:
        find_contact = input("Enter name to look up: ")
        if find_contact in phonebook:
            result = phonebook[find_contact]
            print(find_contact, result)

    elif selection == 2:
        add_name = input("Enter a name to add: ")
        add_phone = input("Enter phone to add: ")
        add_contact(add_name,add_phone)

    elif selection == 3:
        del_contact = input("Enter a name to delete: ")
        if del_contact in phonebook:
            del phonebook[del_contact]

    elif selection == 4:
        for contact in phonebook.items():
            print(f"Contact: {contact}")

    elif selection == 5:
        run_phonebook = False
        with open('phonebook.pickle', 'wb') as fh: 
            pickle.dump(phonebook, fh)
