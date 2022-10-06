
class Pet:
    def __init__(self, name, type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 80
        self.noise = noise

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        return self
    
    def play(self):
        self.health += 5
        self.energy -= 15

    def noise(self):
        # print(f"{self.name} has spoken pure poerty of WOOF...")
        print(self.noise)

hero = Pet("Hero", "Rottweiler", ["sit", "shake"], "WOOF (but real classy)")