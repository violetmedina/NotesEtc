

# class Employee:
#     def __init__(self, id, salary, department):
#         self.company = "Wells Fargo"
#         self.id = id
#         self.salary = salary
#         self.department = department

# anna = Employee(555, 68000, "Legal")
# chase = Employee(222, 100000, "Ops")

# print(anna.salary)
# print(chase.salary)

#1. Delcare a class called employee - DONE
#2. Create 2 instances of the bank class: Anna, Chase - DONE
#3. Create a constructor and define the following properties for the employee class: id salary, department - DONE
#4. Modify the Anna and Chase employee instances to pass initial data to the employee class. - DONE
#4a. Print the Anna's salary - DONE
#4b. Print Chase's Salary - DONE


#5. Create a class Vehicle. A Vehicle object will have 3 attributes:

# make
# model
# year
# A vehicle is created thus:

# class Vehicle:
    
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year

#     def car_info(self):
#         print(self.make, self.model, self.year)

# n_leaf = Vehicle('Nissan', 'Leaf', 2015)

# n_leaf.car_info()

# And you can access it's attributes individually like so:
# print(car.make, car.model, car.year)


# 2. Given the following Person class

class Person: 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))

sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

sonny.greet(jordan)
jordan.greet(sonny)

print(f"{sonny.email} {sonny.phone}")
print(f"{jordan.email} {jordan.phone}")

# 2a. Instantiate an instance object of Person with name of 'Sonny',  #* DONE
# email of 'sonny@hotmail.com' 
# phone of '483-485-4948' 
# store it in the variable sonny.

# 2b. Instantiate another person with the name of 'Jordan', #* DONE
# email of 'jordan@aol.com' 
# phone of '495-586-3456' 
# store it in the variable 'jordan'.

# 2c. Have sonny greet jordan using the greet method. #* DONE
# 2d. Have jordan greet sonny using the greet method. #* DONE
# 2e. Write a print statement to print the contact info (email and phone) of Sonny. #* DONE
# 2f. Write another print statement to print the contact info of Jordan. #*DONE


#3.Go back to the Person class. Add a print_contact_info method to the Person class that will print out the contact info for a object instance of Person. You will use it thus:
    
# sonny.print_contact_info()
# Sonny's email: sonny@hotmail.com, Sonny's phone number: 483-485-4948


# 4. Add an instance variable (attribute)

# - Add a friends instance variable (attribute) to the Person class. 
#  -You will initialize it to an empty list within the constructor init. 
# - Once you've done this you should be able to add a friend to a person using list's append method:
    
# jordan.friends.append(sonny)
# sonny.friends.append(jordan)

# You should also be able to get the number of friends a person has by using the len function on his friends:
    
# len(jordan.friends) 1


#5.Add a add_friend method
# The fact that a person's friends attribute is a list is an implementation detail of the Person class. It is often desired to hide implementation details from the users of your object/class. 
# 
# Implement an add_friend method to Person, so that in order to add a friend, you'd only have to do:

# jordan.add_friend(sonny)
# Instead of

# jordan.friends.append(sonny)


#6.Add a num_friends method
# Similarly, to get the number of friends a person has, we'd like to hide the implementation detail that there is a friends attribute which is a list. 
# 
# Implement a num_friends method which returns the number of friends the person currently has:

# >>> jordan.num_friends() 1

#7.Count number of greetings
# We want to count the number of times a person has greeted someone. 
# 
# - To do this, we'll add another attribute, call it say greeting_count, and initialize it to 0. 
# - Then each time the greet method is called, we'll increment greeting_count by 1.

# >>> sonny.greeting_count
# 0
# >>> sonny.greet(jordan)
# >>> sonny.greeting_count
# 1
# >>> sonny.greet(jordan)
# >>> sonny.greeting_count
# 2




# 8. In this activity, you are going to model a bank account. 

# - Create a class called **BankAccount**. 
# - Add properties for **balance** and **account_number**
# - Allow the user to deposit funds to the account. This can be accomplished by adding a **deposit** function to the BankAccount class. 
# - Allow the user to withdraw funds from the account. This can be accomplished by adding a **withdraw** function to the BankAccount class.
# - Allow the user to transfer funds between two accounts. This can be accomplished by adding a **transfer_funds** function to the BankAccount class. 
# - After creating the BankAccount class, along with all the functions make sure to create instance of BankAccount and perform actions. 

# **Example:**


# checking_account = BankAccount("FD332", 100)
# checking_account.deposit(50) 
# print(checking_account.balance) # $150 


