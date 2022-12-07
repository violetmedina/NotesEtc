# For example, suppose the Elves finish writing their items' Calories and end up with the following list:

# 1000
# 2000
# 3000

# 4000

# 5000
# 6000

# 7000
# 8000
# 9000

# 10000
# This list represents the Calories of the food carried by five Elves:

# The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
# The second Elf is carrying one food item with 4000 Calories.
# The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
# The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
# The fifth Elf is carrying one food item with 10000 Calories.
# In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

# Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

def elf():
    calories = []
    with open("data.txt", "r") as r:
        data = r.read()
        data = data.split("\n")
        # print(data)

    keys = range(len(data))
    res = 0
    max = 0
    mid = 0
    min = 0

    for i in keys:
        if data[i] != '':
            res += int(data[i])
        else:
            calories.append(res)
            res = 0
            pass

    max = sorted(calories)[-1]
    mid = sorted(calories)[-2]
    min = sorted(calories)[-3]

    sum = max + mid + min
    print(min, mid, max)
    print(sum)

elf()





# convert input to data structure to be processed
# function for elf
# add groups of input together to get a total
# compare the results of each group to each other to get the highest total

# group numbers together into objects?
#
#
#
