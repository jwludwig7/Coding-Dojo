# 1 basic 

for i in range(150+1):
    print(i)


# 2 Multiples of five 

for i in range(5,1000+1,5):
    print(i)

# 3 counting, the Dojo way 

for i in range(1,100+1):
    if i % 10 == 0:
        print("Coding Dojo")
    if i % 5 == 0 and i % 10 != 0:
        print("Coding")
    print(i)

# 4 whoa. That sucker big
sum = 0
for i in range(1,500000+1):
    if i % 2 != 0:
        sum += i
        print(sum)

# 5 Countdown by fours 

for i in range(2018,0,-4):
    print(i)

# 6 Flexible counter 
mult = 3
for i in range(9,0,-1):
    if i % mult == 0:
        print(i)

