num1 = 42 #variable declaration, primitive, numbers, int
num2 = 2.3 #varibale declaration, primitive, number, float
boolean = True #variable declaration, primitive, boolean
string = 'Hello World' #variable declaration, primitive, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #lists
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #dictionaires
fruit = ('blueberry', 'strawberry', 'banana')#lists
print(type(fruit)) #<class "list"
print(pizza_toppings[1]) #"sausage"
pizza_toppings.append('Mushrooms') #['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives', 'mushrooms']
print(person['name']) #John
person['name'] = 'George'  #{'name': 'George', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
person['eye_color'] = 'blue' # {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
print(fruit[2]) #banana

if num1 > 45:
    print("It's greater") 
else:
    print("It's lower") #"It's lower"

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!") 
else:
    print("Just right!") #"Just Right!"

for x in range(5):
    print(x) #01234
for x in range(2,5):
    print(x)    #234
for x in range(2,10,3):
    print(x)    #258
x = 0
while(x < 5):
    print(x) #01234
    x += 1

pizza_toppings.pop() #['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
pizza_toppings.pop(1) #['Pepperoni', 'Jalepenos', 'Cheese', 'Olives']

print(person) # {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
person.pop('eye_color') 
print(person) # {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement') #After 1st if statment, After 1st if statment, After 1st if statment
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello') #Hello, Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello, 

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello') #Hello, Hello, Hello, Hello

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times() #Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello
print_hello_x_or_ten_times(4)#Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)