class Coffee : Drink
{
    public string Roast;
    public string Beans;
    public Coffee(string n, string col, double t, int cal, string r, string b) : base(n, col, t, false, cal)
    {
        Roast = r;
        Beans = b;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Roast: {Roast}");
        System.Console.WriteLine($"Beans: {Beans}");
    }
}