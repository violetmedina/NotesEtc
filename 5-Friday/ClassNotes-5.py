
#? Reverse a String !!COMMON INTERVIEW QUESTION!! "How to reverse a number"

# alphabet = "abcdefghijklmnopqrstuvwxyz"

# index = -1

# while index < len(alphabet):
#     print(alphabet[index])
#     index + (-1)


# txt = "Hello World"[::-1]
# print(txt)

#? James' solution

# string = "hello"
# new_string = ""
# index = len(string) - 1
# while index > -1:
#     new_string += string[index]
#     index -= 1
# print(new_string)

#? class solution

# word = "hello"
# index = 0
# reverse = ""

# while index < len(word):
#     reverse = word[index] + reverse
#     index += 1

#! Reverse a number*****

# how do you reverse a number

# import math
# num = -123345  #1234456
# sign = 1

# if(num < 0):
#     sign = -1 
    
# num_str = str(abs(num))

# #"12345"
# reverse_num_str = "" 
# index = 0 

# while index < len(num_str):
#     reverse_num_str = num_str[index] + reverse_num_str
#     index+=1 
    
# print(reverse_num_str)

# rev_num = int(reverse_num_str)

# print(type(rev_num))

# rev_num = sign * rev_num

# print(rev_num)

# myCity = "Houston" 

# myCityList = list(myCity) # ["H", "o", "u", "s", "t", "o", "n"]

# myCityList.reverse()

# print(myCityList) # ['n', 'o', 't', 's', 'u', 'o', 'H'] 

# rev_str = "".join(myCityList)

# print(rev_str)

#? For Loops

# for i in range(1,11):  
#     # value = n * i
#     # print(n," * ",i," = ",value)
#     for j in range(1,11):
#         print(f"{i}*{j} = {i*j}")



