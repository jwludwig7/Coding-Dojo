// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// coin flip
// write your own coin fflip function

static string CoinFlip()
{
    Random rand = new Random();
    if(rand.Next(2) == 0)
    {
        return "Heads";
    }else{
        return "Tails";
    }
}

System.Console.WriteLine(CoinFlip());

// Dice roll for a 6 sided die

static int DiceRoll()
{
    Random rand = new Random();
    return rand.Next(1,7);
}
System.Console.WriteLine(DiceRoll());

// stat roll
// roll a dice 4 times and return a List of those 4 results

static List<int> MultiRoll()
{
    List<int> Results = new List<int>();
    for(int i = 0; i < 4; i++)
    {
        Results.Add(DiceRoll());
    }
    return Results;
}

List<int> Res = MultiRoll();
System.Console.WriteLine(string.Join(",", Res));

// Roll until
// Write a new function that will roll your dice until you land on a certain result. For example, you could tell your code to keep rolling until your 6-sided die rolls the number 2

static string RollUntil(int number)
{
    if(number < 1 || number > 6)
    {
        return "Invalid number";
    }
    int count = 1;
    int result = DiceRoll();
    while(result != number)
    {
        result = DiceRoll();
        count++;
    }
    return $"Rolled a {number} after {count} tries";
}

System.Console.WriteLine(RollUntil(8));
System.Console.WriteLine(RollUntil(3));