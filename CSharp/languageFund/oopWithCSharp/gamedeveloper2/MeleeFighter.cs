class MeleeFighter : Enemy
{

    public MeleeFighter(string n) : base(n, 120)
    {
        Attack Punch = new Attack("Punch", 20);
        Attack Kick = new Attack("Kick", 15);
        Attack Tackle = new Attack("Tackle", 25); 
        this.Attacks.Add(Punch);
        this.Attacks.Add(Kick);
        this.Attacks.Add(Tackle);

    }

    public void Rage()
    {
        Attack RageAttack = base.RandomAttack();
        RageAttack.Damage += 10;
        System.Console.WriteLine($"{RageAttack.Name} for {RageAttack.Damage} damage");
    }



}