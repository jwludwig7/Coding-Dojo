class MagicCaster : Enemy
{

    public MagicCaster(string n) : base(n, 80)
    {
        Attack Fireball = new Attack("Fireball", 25);
        Attack Sheild = new Attack("Sheild", 0);
        Attack StaffStrike = new Attack("Staff Strike", 15);
        this.Attacks.Add(Fireball);
        this.Attacks.Add(Sheild);
        this.Attacks.Add(StaffStrike);
    }

    

    public void Heal(Enemy e)
    {
        e._health += 40;
        System.Console.WriteLine($"{e.Name}'s health is {e._health}");
    }
}