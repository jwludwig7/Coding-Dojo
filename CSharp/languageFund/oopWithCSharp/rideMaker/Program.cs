// Create 4 vehicles using each constructor at least once
Vehicle car = new Vehicle("Ram 1500", "Black");
Vehicle bicycle = new Vehicle("Mongoose", 1, "Black", false, 25);
Vehicle horse = new Vehicle("Jack", 1, "Black", false, 15);
Vehicle scooter = new Vehicle("Scooter", 5, "silver", true, 15);

// Put all the vehicles created into a List
List<Vehicle> AllVehicles = new List<Vehicle>();
AllVehicles.Add(car);
AllVehicles.Add(bicycle);
AllVehicles.Add(horse);
AllVehicles.Add(scooter);

// Loop through the List and have each vehicle run its ShowInfo() method
foreach(Vehicle v in AllVehicles)
{
    v.ShowInfo();
}

// Make one of the vehicles travel 100 miles
car.Travel(100);

// Print the information of the vehicle to verify the distance travelled went up
car.ShowInfo();

