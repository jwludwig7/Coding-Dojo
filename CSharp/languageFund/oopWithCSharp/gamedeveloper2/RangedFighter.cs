class RangedFighter : Enemy
{
    int DistanceField = 5;
    public RangedFighter(string n  ) : base(n, 100)
    {
        DistanceField = 5;
        Attack Arrow = new Attack("Arrow", 20);
        Attack Knife = new Attack("Knife", 15);
        this.Attacks.Add(Arrow);
        this.Attacks.Add(Knife);
    }


    public bool DistanceCheck()
    {
        if(DistanceField < 10)
        {
            System.Console.WriteLine("Too Close");
            return false;
        }
        else
        {
            System.Console.WriteLine("Good To fight");
            return true;
        }
    }

    public void RangeAttack()
    {
        if(DistanceCheck())
        {
            Attack RangeAttack = base.RandomAttack();
            System.Console.WriteLine($"{RangeAttack.Name} delt {RangeAttack.Damage} damage");
        }
    }

    public void Dash()
    {
        DistanceField = 20;
        System.Console.WriteLine("Dashed!!");
        RangeAttack();
    }
}