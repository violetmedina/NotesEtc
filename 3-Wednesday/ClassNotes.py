letter = """

Dear Person, 

Very nice to meet you and look forward to hearing from you again in the future.  Please feel free to reach out to me to let me know the future of this.

"""

# first_name = "Violet"
# last_name = "Me"

# greeting = "Hello {} {}".format(first_name, last_name)

# can use numbers in brackets
# will only run however many placeholders there are, if there are more values nothing happens

# greeting = "Hello {0} {1}".format(first_name, last_name)
                                    # index 0 , index 1

# can also use names
# greeting = "Hello {} {}".format(first_name, last_name)

# my exercise
# atlanta = "Atlanta"
# houston = "Houston"
# philly = "Philly"
# st_pete = "St. Pete"

# student_cities = "Our students live in {}, {}, {} and {}.".format(atlanta, houston, philly, st_pete)

# print(student_cities)

# * correct remapping - must use string format, can't use f string
# c1 = "Atlanta"
# c2 = "Houston"
# c3 = "Philly"
# c4 = "St. Pete"
# student_cities = "Our students live in {atlanta}, {houston}, {philly}, and {pete}".format(atlanta=c1, houston=c2, philly=c3, pete=c4)
# print(student_cities)

# # f string

# # c1 = "New York
# # c2 = "Seattle"
# # c3 = "London"

# # my_city = f'Houston {c1}, {c2}, {c3}'


# print('add 2 numbers together.')

# num1 = input('enter in first value>> ')  # strings  3

# num2 = input('enter in second number>> ') # strings 4

# result = int(num1) + int(num2)  # 3 + 4

# print(result)

# add, subtract, multiply, divide

# ? menu 

# 1. add 
# 2. subtract
# 3. multiply
# 4. divide
# 5. exit

# choice = ""

# while choice != 5:
#     print('Choose a math operation:')
#     choice = int(input(""" 
#     1. add 
#     2. subtract 
#     3. multiply
#     4. divide
#     5. exit

#     """))  #integer


#     print('enter in 2 numbers ')
#     num1 = int(input('enter num1 >> '))
#     num2 = int(input('enter num2 >> '))
#     if choice == 1:
#         result = num1 + num2
#         break
#     elif choice == 2:
#         result = num1 - num2
#         break
#     elif choice == 3:
#         result = num1 * num2
#         break
#     elif choice == 4: 
#         result = num1 / num2
#         break
#     else:
#         result = 'this is not a menu choice'
    
#     print(result)
#     print("Would you like to try again? (Y/N)? ")

choice = "0"
result = ""
answer = ""

while choice != 5 or answer != 'n':
    print('Choose a math operation:')
    choice = int(input(""" 
    1. add 
    2. subtract 
    3. multiply
    4. divide
    5. exit

    """))  #integer

    if choice != 5:
        print('enter in 2 numbers ')
        num1 = int(input('enter num1 >> '))
        num2 = int(input('enter num2 >> '))
        if choice == 1:
            result = num1 + num2
        elif choice == 2:
            result = num1 - num2
            break
        elif choice == 3:
            result = num1 * num2
            break
        elif choice == 4: 
            result = num1 / num2
            break
        print(result)
        choice = 0
        answer = input("Would you like to try again? (Y/N)? ")

print("Goodbye")