

# class Student:  # not customizable, hardcoded properties
    
#     first_name = "Chloe"
#     city = "London"
#     #properties(attributes)
#     #functions(methods)

#     pass


# chloe = Student()

#####################

# class Student:
    
#     #properties(attributes)
#     first_name = "Chloe"
#     city = "London"
    
#     #functions(methods)
#     def greeting(self):
#         print("Hello World")

#     pass

# tri = Student()
# tri.greeting() #output is Hello World

# chloe = Student()
# chloe.first_name #output is Chloe

######################

# class Student:

#     def __init__(self, first_name, city):
#         print('Constructor was called')
#         self.first_name = first_name
#         self.city = city

#     #functions(methods)
#     def greeting(self):
#         print("Hello World")


# felipe = Student("Dez", "Atlanta")
# dez = Student("Felipe", "Houston")

# print(dez.first_name, dez.city)
# print(felipe.first_name, felipe.city)

#################

# class Button:
# # All methods have to be in order, can't be broken up by any other code
#     def __init__(self, color, name):
#         self.color = color
#         self.name = name
#         self.click = 0
    
#     def show_info(self):
#         print(f"{self.name} {self.color} {self.click}")
    
#     def handle_click(self):
#         self.click += 1
#         print(f"Number of clicks {self.click}")

# helpButton = Button("Blue", "Help")
# buyNow = Button("Purple", "Buy Now")
# home = Button("Blue", "Home")

# helpButton.handle_click()
# helpButton.handle_click()
# helpButton.handle_click()
# helpButton.handle_click()

# buyNow.handle_click()

# helpButton.show_info()
# buyNow.show_info()
# home.show_info()

# #############################

# class GoogleMaps:

#     EARTH_RADIUS = 1234567 # constant variable visible by all instances of GoogleMaps

#     def __init__(self, startLocation, endLocation, lat, long)
#         self.startLocation = startLocation
#         self.endLocation = endLocation
#         self.lat = lat
#         self.long = long

#     def map(self, start, end):
#         print(f"Here is your map for {start} and {end}.")

# map1 = GoogleMaps("123 Sesame Street", "456 Sesame Street", 95, 96)
# map2 = GoogleMaps("123 MLK Blvd", "456 MLD Blvd", 78, 96)

# map1.map("111 Ventura Blvd", "222 Ventura Blvd")
# map2.map("222 Rodeo Dr", "333 Rodeo Dr")

##############################

# class Test:
#     def __init__(self):
#         self._a = "a" #semi-private
#         self.__b = "b" #private

#     def printPrivateVar(self):
#         print(f"{self.__b}")

# myTest = Test()

# myTest.printPrivateVar()

#######################
#? Inheritance 

# class Animal: 
#     def __init__(self, name): 
#         self.name = name
        
#     def whoAmI(self):
#         print('I am an animal')
        

# class Dog(Animal):
    
#     def woof(self): 
#         print(f'wolf {self.name}')
        
        
# poodle = Dog('Pickle')

# poodle.woof()
# poodle.whoAmI() 

# writing a class to reverse a string

# name = "Roberto"

# print(name.#methods come up as options)

# class MyString(str):

#     def __init__(self, word):
#         self.word = word #hello as olleh

#     def reverse(self):
#         rev_string = ""

#         for char in self.word:
#             rev_string = char + rev_string

#         return rev_string

# some_string = MyString("hello")
# print(some_string.reverse())

class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def intro(self):
        print(f"Here are the details of this car {self.make} {self.model} {self.color}")

class Hybrid(Car):
    def __init__(self, mpg, make, model, color):
        super().__init__(make, model, color)
        self.mpg = mpg

    def milPerGal(self):
        print(f"{self.mpg}")

class Electric(Car):
    
    def battery_life(self):
        print("300 miles per full charge")


prius = Hybrid(50, "toyota", "prius", "lime green")
prius.intro()
prius.milPerGal()

tesla = Electric("tesla", "model-s", "purple")
tesla.intro()
tesla.battery_life()

#? Implicit inheritance

# class Parent():

#     def implicit(self):
#         print("Parent implicit")

#     def override(self):
#         print("Parent override")

# class Child(Parent):
#     def implicit(self):
#         print("Child implicit")
    
#     def override(self):
#         print("Child override")
#         super(Child, self).altered()

# willSmith = Parent()
# willSmith.implicit

# jadenSmith = Child()
# jadenSmith.implicit()
# jadenSmith.override()

# can still call method from parent with using super()


# Inheritance vs composition

class Student:

    def __init__(self, first_name, city):
        self.first_name = first_name
        self.city = city

    #functions(methods)
    def printFirstName(self):
        print(f"{self.first_name {self.city}}")


student1 = Student("Dane", "Tampa")
student2 = Student("Veronica", "Orlando")
student3 = Student("Dez", "Atlanta")
student4 = Student("Gary", "Atlanta")
student5 = Student("Tri", "Philly")

# composition
class Campus:
    def __init__(self):
        self.students = [] # holds all of uor students

    def addStudent(self, name, city):

        #create instance of student
        studentObj = Student(name, city)
        self.students.append(studentObj)

    def printStudentNames(self):

        for student in self.students:
            print(student.firstName)

campus = Campus()

campus.addStudent("Dane", "Tampa")
campus.addStudent("Veronica", "Orlando")
campus.addStudent("Dez", "Atlanta")
campus.addStudent("Dane", "Tampa")
campus.addStudent("Dane", "Tampa")