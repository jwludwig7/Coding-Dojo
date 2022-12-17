Enemy bob = new Enemy("Bob");


Attack punch = new Attack("punch", 15);
Attack kick = new Attack("kick", 20);
Attack bSlap = new Attack("BSlapp", 35);

bob.Attacks.Add(punch);
bob.Attacks.Add(kick);
bob.Attacks.Add(bSlap);

// bob.ShowStats();

// bob.whichAttack().ShowInfo();

bob.showAttacks();