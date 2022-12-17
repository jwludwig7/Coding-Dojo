class Attack
{
    public string Name;
    public int Damage;

    public Attack(string n, int d)
    {
        Name = n;
        Damage = d;
    }
    public void ShowInfo()
    {
        System.Console.WriteLine($"Name of Attack: {Name}");
        System.Console.WriteLine($"Damage of Attack: {Damage}");
    }

    public void useAttack(int health)
    {
        health-=Damage;
        System.Console.WriteLine($"Attack hit for{Damage} hp. Total Health left: {health}");
    }
}