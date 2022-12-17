class Enemy
{
    public string Name;
    private int Health;

    public int _health
    {
        get { return Health; }
        set { Health = value; }
    }
    public List<Attack> Attacks;

    public Enemy(string n, int h)
    {
        Name = n;
        Health = h;
        Attacks = new List<Attack>();
    }

    public virtual void ShowStats()
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

    public Attack RandomAttack()
    {
        Random rand = new Random();
        int num = rand.Next(0, this.Attacks.Count);
        System.Console.WriteLine($"{Name} used {Attacks[num].Name}");
        return this.Attacks[num];
    }
}