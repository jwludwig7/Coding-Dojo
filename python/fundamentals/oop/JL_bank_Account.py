class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        # your code here
        self.balance += amount
        return self
    def withdraw(self, amount):
        # your code here
        if amount > self.balance:
            print("Insufficent funds: Charging a fee of $5 billion")
        else:
            self.balance -= amount
        return self
    def display_account_info(self):
        # your code here
        print(f"You have ${str(self.balance)} to your name")
        return self

    def yield_interest(self):
        # your code here
        if self.balance > 0:
            self.balance *= (self.rate + 1)
        return self

user1 = BankAccount(0.03,5000)
user2 = BankAccount(0.04,100)

user1.deposit(100).deposit(500).deposit(500).withdraw(950).yield_interest().display_account_info()
user2.deposit(27).deposit(69).withdraw(50).withdraw(25).withdraw(122).yield_interest().display_account_info()
