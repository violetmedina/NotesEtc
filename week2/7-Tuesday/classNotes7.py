

# What is a dictionary?
# Python's Dictionary type lets you create a mapping from keys to values. They are useful for representing information as records.

# How do I create a dictionary?
# Looking more closely at our first example:

# friend_info = {
#     "Name": "Alan Turing",
#     "Cell": "6017576",
#     "Birthday": "June 23",
# }
# A dictionary consists of pairs of keys and values inside of curly braces.

# Keys and their values are separated by a :.
# Key-value pairs are separated by a ,.
# An empty dictionary can be created like so:
# empty_dictionary = {}

# You cannot use list or dictionaries as keys. (Most common is to use a descriptive string, a 'title')
# Need to be unique

# You can use any immutable value as a key in a Python dictionary.

# What can I use as a value?
# Dictionary values can be any valid Python type, including lists and dictionaries.

# How do I retrieve data?

# superhero = {
#     "name": "Wonder Woman",
#     "alias": "Diana Prince",
#     "gear": [
#         "Lasso of Truth",
#         "Bracelets of Submission"
#     ],
#     "vehicle": {
#         "title": "Invisible Jet",
#         "speed": "2000 mph",
#     }
# }

# hero_name = superhero["name"]
# hero_alias = superhero.get("alias") # .get is a method, used to avoid throwing an error when searching for data, returns 'none' instead
# hero_values = superhero.values()

#? [<key name>] retrieves the value for a key using the index syntax (similar to lists)
#? .get(<key name>) if it exists, retrieves the value for a key, or returns None - second arg optional
#? .values() returns all values of a dictionary
#? .keys() will return all keys i.e. myDictionary.keys() - will return a tuple of all of the keys
#? .items() will return tuple [(key, value), (key, value)] - allows to loop through both keys and values

# How do I check if a key exists?
# The in operator to see if a key exists in a dictionary
#   result "key" in myDictionary = Bool (True/False)
# You can also use not in

# To update use the key on the LHS
# Use del to delete a key/value pair - cannot delete just the value, can reset but can't delete, must del whole key
# If you have a value you have a key and if you have a key you have a value

#! Copy line 67-70 from class.py

# How do I access data in nested dictionaries?
superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

vehicle = superhero["vehicle"]
vehicle_title = vehicle["title"]

print(vehicle_title)

# By indexing and assigning to variables, you can get to the data in a nested dictionary:

# Output: Invisible Jet

# Alternatively, you can omit the intermediary vehicle variable and just stack additional [] to index further and further into the dictionaries:

vehicle_title = superhero["vehicle"]["title"]

print(vehicle_title)

# How do I access data in a list in a dictionary?
# To access a specific list item inside a dictionary, first use the key name for the list. Then use the numerical index for the item in the list.

=======
# TODO EXAMPLE

import pickle 

# data = {'name': 'Gary'}

# writing to the pickle file
# with open('data.pickle', 'wb') as fh: 
#     pickle.dump(data, fh)

#reading from the pickle file 

# with open('data.pickle', 'rb') as fh: 
#     data = pickle.load(fh)
    
# print(data)
    

with open('todos.pickle', 'rb') as fh: 
    todos = pickle.load(fh)

# todos = {
#     "high": [],
#     "low": []
# }




def addTodo(priority, newTodoItem): # 1, high, 2 low
    
    # check priority level 
    if priority ==1: # high
        #insert item into list
        todos["high"].append(newTodoItem)
        
    elif priority ==2 : # low
        #insert item into list
        todos["low"].append(newTodoItem)
    

getTask = True

while getTask:
    selection = int(input(f""" 

    1. add task 
    2. delete task 
    3. view all tasks 
    
                
    """))

    priority = int(input(f'''
                        1. high priority
                        2. low priority
                        '''))

    if selection == 1: # adding a task 
    
        task = input("Enter a new todo item")
        #adds data based priority to todos
        addTodo(priority, task)
        
    elif selection == 2: 
        pass 
    elif selection == 3:
        if(priority == 1):
            
            #todos["high"]  # ["mpo the floor", "feed the cat"]
        
            for todo in todos["high"]: 
                print(todo)
        elif(priority == 2):
            
            # todos["low"] # list
                
            for todo in todos["low"]: 
                print(todo)
    
    answer = input('Do you want to continue, y or n')
    
    if answer == 'n':
        getTask = False
        #write todos to file
        with open('todos.pickle', 'wb') as fh: 
            pickle.dump(todos, fh)
