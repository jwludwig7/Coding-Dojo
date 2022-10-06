players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

# class Player:
#     def __init__(self, name, age, position, team):
#         self.name = name
#         self.age = age
#         self.position = position
#         self.team = team

# kevin = {"name": "Kevin Durant", "age": 34, "position": "small forward", "team": "Brooklyn Nets"}
# jason = {"name": "Jason Tatum", "age": 24, "position": "small forward", "team": "Boston Celtics"}
# kyrie = {"name": "Kyrie Irving", "age": 32, "position": "Point Gaurd", "team": "Portland Trailblazers"}
# joel =  {"name": "Joel Embiid", "age":32, "position": "Power Foward", "team": "Philidelphia 76ers"}
# demar = {"name": "DeMar DeRozan", "age": 32, "position": "Shooting Guard", "team": "Chicago Bulls"}

# player_kevin = Player(kevin["name"], kevin["age"], kevin["position"], kevin["team"])
# player_jason = Player(jason["name"], jason["age"], jason["position"], jason["team"])
# player_kyrie = Player(kyrie["name"], kyrie["age"], kyrie["position"], kyrie["team"])
# player_joel = Player(joel["name"], joel["age"], joel["position"], joel["team"])
# player_demar = Player(demar["name"], demar["age"], demar["position"], demar["team"])
# print(player_kevin.team)
# print(player_jason.team)
# print(player_joel.team)
# print(player_kyrie.team)
# print(player_demar.team)



class Player:
    def __init__(self, data):
        self.name = data['name']
        self.age = data['age']
        self.position = data['position']
        self.team = data['team']
    
    def __repr__(self):
        display = f"Player: {self.name}, {self.age} y/o, pos: {self.position}, team: {self.team}"
        return display


kevin = {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
}
jason = {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
}
kyrie = {
        "name": "Kyrie Irving", 
        "age":32, "position": "Point Guard", 
        "team": "Brooklyn Nets"
}
joel =  {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    }
demar = {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
    
# Create your Player instances here!
player_jason = Player(jason)
player_kevin = Player(kevin)
player_kyrie = Player(kyrie)
player_joel = Player(joel)
player_demar = Player(demar)
print(player_jason)
print(player_kevin)
print(player_kyrie)
print(player_joel)
print(player_demar)


