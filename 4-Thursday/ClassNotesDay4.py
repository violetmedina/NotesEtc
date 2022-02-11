

# * Examples from the reading

# How do I find the length of a Sequence?
# Python provides a len() function that will tell you how many items are in a Sequence.
# You give len() a Sequence; it returns an integer. We will use this as part of the condition for a while-loop

todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# add a todo list item

todos.append("new item")



# index = 0 # Begin with index 0

# while index < len(todos):

#*     todo = todos[index]

#     print("%d: %s" % (index + 1, todo))

#     index += 1

# todo list
# display the original list numbered in order
# prompt user to add additional item
# use logic to add item to our list
# display list again with the new item
# ask user again, if you want to add a new item
# Keep asking until the user says stop (edited)

todos = ["pet the cat", "go to work", "shop for groceries", 
"go home", "feed the cat"]

index = 0
while index < len(todos):
    print(f"{index + 1}. {todos[index]}")
    index += 1

running = True
while running:
    item = input("Add item to list: ")
    todos.append(item)
    index = 0
    while index < len(todos):
        print(f"{index + 1}. {todos[index]}")
        index += 1
    keep_going = input("Do you want to add another item? (Y or N) ")
    if keep_going.upper().strip() == "N":
        running = False