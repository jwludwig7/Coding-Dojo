class Pet:
    def __init__(self, name, type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 80
        self.noises = noise

    
    def sleep(self):
        self.energy += 25
        print(f"Energy has been retored to {self.energy}")
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"Energy is at {self.energy} and health is at {self.health}")
        return self
    
    def play(self):
        self.health += 5
        self.energy -= 15
        print(f"Health: {self.health} Engery {self.energy}")
        return self

    def noise(self):
        # print(f"{self.name} has spoken pure poerty of WOOF...")
        print(self.noises)


class Ninja:
    def __init__(self, first_name, last_name, treat, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treat = treat
        self.pet_food = pet_food
        self.pet = pet
    

    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        self.pet.eat()
        return self

    def bathe(self):
        self.pet.noise()    


my_treat = ["Milk-Bone"]
my_pet_food = ["Pedigree"]

hero = Pet("Hero","Rottweiler",["sit","shake"],"WOOF but real classy")

jordan = Ninja("Jordan","Ludwig",my_treat,my_pet_food, hero)

jordan.bathe()


