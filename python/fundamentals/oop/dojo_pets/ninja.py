# from pet import Pet


class Ninja(Pet):
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        super().__init__()
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food
    
    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        self.pet.eat()
        return self

    def bathe(self):
        self.pet.noise()    


my_treats = ["Milk-Bone"]
my_pet_food = ["Pedigree"]

jordan = Ninja("Jordan", "Ludwig", my_treats, my_pet_food)

print(jordan.first_name)
