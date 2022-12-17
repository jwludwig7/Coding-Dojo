Soda RcCola = new Soda("RC Cola", "Brown", 40, 150, false);
Coffee Black = new Coffee("Black Coffee", "Black", 120, 90, "dark", "coffee beans");
Wine Box = new Wine("box wine", "red", 50, 100, "USA", 2022);

List<Drink> AllBevies = new List<Drink>();
AllBevies.Add(RcCola);
AllBevies.Add(Black);
AllBevies.Add(Box);

foreach(Drink d in AllBevies)
{
    d.ShowDrink();
}
