class BankAccount:
    def __init__(self, int_rate, balance): 
        self.rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficent funds: Charging a fee of $5 billion")
        else:
            self.balance -= amount
        return self
    def display_account_info(self):
        print(f"You have ${str(self.balance)}to your name")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance *= (self.rate + 1)
        return self



class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=500)
        
    def make_deposit(self, amount):
        self.account.deposit(amount)
        # print(self.account.balance)
    
    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        # print(self.account.balance)

    def display_user_balance(self):
        print(f"Your balance is {self.account.balance}")

user_John = User("John", "JD@gmail.com")

user_John.make_deposit(100.50)
user_John.make_withdraw(150.65)
user_John.display_user_balance()

