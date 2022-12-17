// Create 4 vehicles using each constructor at least once
Car car = new Car("Ram 1500", 5, "Black", 120, "Gas");
Bicycle bicycle = new Bicycle("Mongoose", "Black", 25);
Horse horse = new Horse("Jack", "Black", 15, "Hayyyyyy");
// Vehicle scooter = new Vehicle("Scooter", 5, "silver", true, 15);

// Put all the vehicles created into a List
List<Vehicle> AllVehicles = new List<Vehicle>();
AllVehicles.Add(car);
AllVehicles.Add(bicycle);
AllVehicles.Add(horse);
// AllVehicles.Add(scooter);

List<INeedFuel> NeedsFuel = new List<INeedFuel>();

// Loop through the List and have each vehicle run its ShowInfo() method
foreach (Vehicle v in AllVehicles)
{
    if (v is INeedFuel)
    {
        NeedsFuel.Add((INeedFuel)v);
    }
}

foreach(INeedFuel i in NeedsFuel)
{
    i.GiveFuel(10);
}

