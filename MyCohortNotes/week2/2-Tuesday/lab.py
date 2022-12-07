
import corona
# print state, cases, recovered, active

for x in range(len(corona.data)):
    result = [corona.data[x].get("state"), 
            corona.data[x].get("cases"),
            corona.data[x].get("recovered"),
            corona.data[x].get("active")
            ]
    print(f"State: {result[0]}\nCases: {result[1]}\nRecovered: {result[2]}\nActive: {result[3]}\n")



# 1. Create a dictionary called zodiac with the following information.
# Each key is the name of the zodiac

# zodiac = {
#     "Aries" : "The Warrior",
#     "Taurus" : "The Builder",
#     "Gemini" : "The Messenger",
#     "Cancer" : "The Mother",
#     "Leo" : "The King",
#     "Virgo" :"The Analyst",
#     "Libra" : "The Judge",
#     "Scorpio" : "The Magician",
#     "Sagittarius" : "The Gypsy",
#     "Capricorn" : "The Father",
#     "Aquarius" : "The Thinker",
#     "Pisces" : "The Mystic"
# }

# my_sign = zodiac["Cancer"]
# print(my_sign)

# 1a. Retrieve information about your zodiac from the zodiac dictionary

# 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }

# # 2a. Print Elizabeth's phone number

# liz_phone = phonebook_dict['Elizabeth']
# print(f'Elizabeth: {liz_phone}')

# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# print(phonebook_dict)

# # 2c. Delete Alice's phone entry.

# del phonebook_dict["Alice"]
# print(phonebook_dict)

# # 2d. Change Bob's phone number to '968-345-2345'.

# phonebook_dict['Bob'] = '968-345-2345'
# print(phonebook_dict)

# # 2e. Print all the phone entries.

# for person, phone in phonebook_dict.items():
#     print(person, phone)

# 3. Nested dictionaries

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }
# # 3a. Write a python expression that gets the email address of Ramit.

# print(ramit['email'])

# # 3b. Write a python expression that gets the first of Ramit's interests.

# print(ramit['interests'][0])

# # 3c. Write a python expression that gets the email address of Jasmine.

# print(ramit['friends'][0]['email'])

# # 3d. Write a python expression that gets the second of Jan's two interests.

# print(ramit['friends'][1]['interests'][1])

# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}

# def histogram(word):
#     count = {}  # count['a'] = 3  count = {'b': 1, 'a': 3, 'n': 2}
#     for letter in word:
#         if letter not in count:
#             count[letter] = 1
#         else:
#             count[letter] += 1
#     return count


# print(histogram("banana"))

# dc
# narf


# string = input('Input a word: ')



# Word Summary
# Write a word_histogram function that takes a paragraph of
# text as its input, and returns a dictionary containing
# the tally of how many times each word in the alphabet was
# used in the text. For example:

# >>> word_histogram('To be or not to be')   ['To', 'be', 'or', 'not', 'to', 'be']

# {'To': 2,
#  'be': 1
#  }


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# def letter_histogram(word): 
#     #banana {e: }
#     histogram = {}  #{b: 1, a: 1 }  histogram["a"] = 1  caching, memoization
    
#     for char in word:
#         if char in histogram:
#             histogram[char]+=1
#         else: 
#             histogram[char] = 1
        
#     return histogram

# print(letter_histogram('engineering'))


def word_summary(paragraph):
    word_histogram = {}
    lower_paragraph = paragraph.lower()
    word_list = lower_paragraph.split(" ")
    for word in word_list:
        if word in word_histogram:
            word_histogram[word] += 1
        else:
            word_histogram[word] = 1
    return word_histogram

word_summary('To be or not to be')
        
    