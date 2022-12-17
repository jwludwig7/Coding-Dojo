class Drink
{
    public string Name;
    public string Color;
    public double Temperature;
    public bool IsCarbonated;
    public int Calories;

    public Drink(string n, string c, double t, bool ic, int cal)
    {
        Name = n;
        Color = c;
        Temperature = t;
        IsCarbonated = ic;
        Calories = cal;
    }

    public virtual void ShowDrink()
    {
        System.Console.WriteLine($"Name: {Name}");
        System.Console.WriteLine($"Color: {Color}");
        System.Console.WriteLine($"Temperature: {Temperature} f");
        System.Console.WriteLine($"Is Carbonaated: {IsCarbonated}");
        System.Console.WriteLine($"Calories: {Calories}");

    }
}