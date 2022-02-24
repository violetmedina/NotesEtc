
#! OBJECT ORIENTED PROGRAMMING - grouping of related functions and variables into objects, a way to organize/group similar code
#! 4 Pillars of OOP: Encapsulation, Abstraction, Inheritance, Polymorphism

#? Class (is like a function of nested functions, created to be reused many, many times)
# You can think of a class like a blueprint for making a specific kind of house. You can use the blueprint to make individual instances of that class.
# Attributes are the qualities of a specific house, such as the color of the exterior, the number of floors, and the size of the pool on the roof. Each instance will be different from other houses based on these attributes.
# Classes usually have methods, which are functions that describe what instances of that class can do. Continuing with our analogy, these are like rooms in a house that have a dedicated purpose, like a kitchen or a game room.
# The rooms connect to each other via a hallway and can access the attributes of that house.

# You can call a class multiple times and get a different instance of the class.

# TIP - Some developers think of classes as "factories" for new instances.

#? Constructors (function that builds the instance of the class)
# A blueprint defines a house, but a blueprint does not build a house.

# In order to do that, a team of workers does the job of pouring the foundation, framing the structure, and building out the rooms.
# Luckily, Python takes care of this process for us when it builds an object, letting us configure the object as it is built.

# An individual object created from a class is known as an instance of that class.
# The function that creates instances is the constructor.

#? Class implimentation
# To implement this as part of our Pet class, you have to tell the class to add these attributes when it creates an instance.

class Pet:
    def __init__(self):
        self.name = "Cujo"
        self.fullness = 50
        self.happiness = 20

# TIP
# It is customary to name this parameter self.
# Technically, you can give it any valid parameter name, but seasoned Python developers would find this jarring.

#? Method (Methods modify the class with a function that executes an action)(usually after the dot)

# As with __init__, the first parameter is self, which is how the body of the method access the instance.

# Methods go into the class, just like the attribute function, but instead of assigning attributes, it does an action(behavior).

# When creating methods, good to use other methods over variables in case a variable changes.

#? Encapsulation (reduce complexity + increase reusability)
# In Object-Oriented Programming, 
# one of the main features of classes is that they provide a way to 
# ***bundle state (attributes/Properties) and behavior (methods).***
# This is known as encapsulation.

# The parent "superclass" and the subclasses are basically merged together yet separate.

# Practicing good encapsulation is a matter of deciding the minimum amount of information an object needs to store in its state in order to do its work via its behaviors. Likewise, methods should have as few responsibilities as possible. As with functions, a method should have one clear and specific purpose.
#* Can also pass parameters into methods

#? Inheritance (helps eliminate redundant code)
# Another technique from Object-Oriented Programming involves making specialized versions of classes.
# While an instance of the Pet class can be manually configured to be happy, creating many of them with the same constructor arguments is a sign that we need another class. (subclass)

# Here is how to make a subclass of Pet:

class CuddlyPet(Pet):
    pass

# By putting Pet in parentheses next to the name of the class, we're telling Python that the CuddlyPet class inherits from Pet.

# TIP
# A class that inherits from another is a subclass.
# Subclasses inherit from superclasses, also known as parent classes.
# There is nothing special about superclasses. They are simply classes that provide default attributes and methods for their subclasses.

# As is with a function, a subclass can create it's own internal methods that will override the parent(superclass) methods as it looks inside first.

# When should I add attributes to the superclass and when should I add them to subclasses?
# When you want to make a change to the superclass and all its subclasses, make the change to the superclass. If you only want the change to affect a specific subclass, only change that subclass.

# This works both for attributes as well as methods.

#? Implicit Inheritance

# Inheritance

# 3 ways that the parent and child classes can interact:

# 1. Actions on the child imply an action on the parent.

# 2. Actions on the child override the action on the parent.

# 3. Actions on the child alter the action on the parent.

#? Abstraction (reduces complexity + isolates impact of changes)

#? Polymorphism (refactor ugly switch/case statements)


#? Composition (not everything should be a subclass)

# When should I store additional information in another class?
# Once we start adding attributes to an attribute, it might be a good time to make another class.
# TIP
# The terms "is-a" and "has-a" are used as a common sense way to help us decide what should be a separate class and what should be a subclass.

# Some Terminology
# classes - A template used to make an object.
# instance - What you get when you tell Python to create a class
# object refers to a particular instance of a class, where the object can be a combination of variables, functions, and data structures.
# methods - a function inside of a class
# constructors - special function used to initialize an object
# instance variables - those variables for which each class object has it's own copy of it.
# inheritance - allows us to define a class that inherits all the methods and properties from another class.
