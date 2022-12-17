class Wine : Drink
{
    public string Region;
    public int Year;
    public Wine(string n, string col, double t, int cal, string r, int y) : base(n, col, t, true, cal)
    {
        Region = r;
        Year = y;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Region: {Region}");
        System.Console.WriteLine($"Year: {Year}");
    }
}