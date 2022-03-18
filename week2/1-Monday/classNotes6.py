# Functions

# What is a function?

# A function is like a recipe. It gives you a list of ingredients. After all the steps are carried out, the result is a specific dish.
# An example of a function is the print() function. The ingredient it wants is a String (or something it can get a String version of). The result is output to the screen.

# A function is defined in four parts.

# In Python, you create a function by:

# Using the def keyword
# Naming the function
# Declaring parameters ("ingredients")
# Providing the body of the function as a code block

# TIP
# -1 is commonly used to indicate that an index is invalid. This convention is popular in a number of languages, including Python and Java.

# When Python encounters the return keyword while running a function, it exits the functions. This means that none of the statements after return will run.

#What is recursion?

# A function that calls itself is a recursive function. Recursion is an alternative to using a loop.

# To write recursive functions, make sure that:

# You define the base case
# Your alternate case includes a recursive function call
# The set of values gets smaller each time

def fahr_to_cel():
    c = (temp-32) * (5/9)
    return c

def cel_to_fahr():
    f = (1.8*temp) + 32
    return f

convert_temp = True

while convert_temp:

    temp = int(input("Enter a temperature >> "))

    selection = int(input("""
1. convert temp to celsius
2. convert temp to fahreneit
    """))

    if selection == 1:
        result = fahr_to_cel
    elif selection == 2:
        result = cel_to_fahr
    else:
        print("goodbye")

    print(result)

    again = input("""
Would you like to run another conversion? (Y/N)
""")

if again == "Y":
    convert_temp = True
elif again == "N":
        convert_temp = False
else:
        print("That was not a selection option.")
