# Press 1 to add task
# Press 2 to delete task
# Press 3 to view all tasks
# Press q to quit

#  ie mop the floor, feed the cat

# list, dictionary
# todo    high/low  

# {
#     "high":
#     "low":
# }

import pickle

todos = {
    "high": []
    "low": []
}

def add_todo(priority, item): # 1 is high and 2 is low

    # check priority level
    if priority == 1: # high
        # insert item into list
        todos["high"].append(new_item)
    elif priority == 2:
        # insert item into list
        todos["high"].append(new_item)

while get_task:
    selection = int(input(f"""

    1. add task
    2. delete task
    3. view all tasks
    4. quit
    """))

    priority = int(input(f"""
                1. high priority
                2. low priority"""))
    task = input("Enter a new task: ")

    if selection == 1:
    # function that adds priority based on todos
    add_todo(priority, task)
    elif selection == 2:
        pass
    elif selection == 3:
    if(priority == 1):
        for x in todo["high"]:
            pass
    elif(priority == 2):
    elif selection == 4:
    pass

    answer = input("Do you want to continue, y or n: ")


=======
# TODO CLASS EXAMPLE

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
