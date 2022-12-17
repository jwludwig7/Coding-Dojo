MeleeFighter BobTheBuilder = new MeleeFighter("Bob Tha Builder");
RangedFighter BowGuy = new RangedFighter("Bow Guy");
MagicCaster MagicGuy = new MagicCaster("Magic Guy");

BobTheBuilder.RandomAttack();

System.Console.WriteLine("====================");

BobTheBuilder.Rage();

System.Console.WriteLine("====================");

BowGuy.RangeAttack();

System.Console.WriteLine("====================");

BowGuy.Dash();

System.Console.WriteLine("====================");

BowGuy.RangeAttack();

System.Console.WriteLine("====================");

MagicGuy.RandomAttack();

System.Console.WriteLine("====================");

MagicGuy.Heal(BobTheBuilder);


