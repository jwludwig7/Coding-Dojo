class Enemy
{
    public string Name;
    private int Health;
    public List<Attack> Attacks;

    public Enemy(string n)
    {
        Name = n;
        Health = 100;
        Attacks = new List<Attack>();
    }

    public void ShowStats()
    {
        System.Console.WriteLine($"Name: {Name}");
        System.Console.WriteLine($"Health: {Health}");
    }

    public void showAttacks()
    {
        for (int idx = 0; idx < Attacks.Count; idx++)
        {
            Attacks[idx].ShowInfo();
        }
    }

    public Attack whichAttack()
    {
        Random rand = new Random();
        int num = rand.Next(0, 4);
        System.Console.WriteLine($"{Name} used {Attacks[num].Name}");
        return this.Attacks[num];
    }
}