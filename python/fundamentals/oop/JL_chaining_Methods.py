class User:

    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("==========================")
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("==========================")   

        return self

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200

        return self

    def spend_points(self,amount):
        self.gold_card_points -= amount

        return self



user_John = User("John", "Doe", "JD@gmail.com", 26)
user_Jane = User("Jane", "Doe", "JD@aol.com", 28)
# print(user_John.is_rewards_member)
user_John.display_info().enroll().display_info().spend_points(80).display_info()
user_Jane.display_info().enroll().display_info().spend_points(50).display_info()





