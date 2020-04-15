export class RPG {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.vitality;
    this.brains;
    this.sporty;
    this.cool;
    this.encounterCount = 0;
  }

  openingString() {
    let textStart = `You begin your journey through the harsh landscape of 80s pop culture. You're a ${this.gender}. You've also chosen to call yourself ${this.name}.`;
    return textStart;
  }

  leveler(adjustment) {
    this.vitality += adjustment;
    this.brains += adjustment * (this.baseBrains / 10);
    this.sporty += adjustment * (this.baseSporty / 10);
    this.cool += ajustment * (this.baseCool / 10);
    this.encounteCount++;
  }

  assignStat(stat, value) {
    this[stat] = value;
    return this[stat];
  }

  assignStats(vitality, brains, sporty, cool) {
    this.vitality = vitality;
    this.brains = brains;
    this.sporty = sporty;
    this.cool = cool;
  }
}

export function fight(player, npc, battleType) {
  if (battleType === "fistFight") {
    skill = "sporty";
  } else if (battleType === "outsmart") {
    skill = "brains";
  } else {
    skill = "cool";
  }

  if (npc[skill] > player[skill]) {
    npc.leveler(2);
    player.leveler(-1);
    return npc;
  } else if (npc[skill] < player[skill]) {
    npc.leveler(-1);
    player.leveler(2);
    return player;
  } else {
    npc.leveler(1);
    player.leveler(1);
    return false;
  }
}

export class Nerd extends Character {
  // Methodies Modifies Base Class Attributes
  constructor(name, gender) {
    super(nam, gender);
    this.vitality = 10;
    const nerdBrains = 100;
    const nerdSporty = 50;
    const nerdCool = 50;

    this.baseBrains = nerdBrains;
    this.brains = nerdBrains;

    this.baseSporty = nerdSporty;
    this.sporty = nerdSporty;

    this.baseCool = nerdCool;
    this.cool = nerdCool;
  }
}

export class Prep extends Character {
  // Methodies Modifies Base Class Attributes
  constructor(name, gender) {
    super(nam, gender);
    this.vitality = 10;
    const prepBrains = 50;
    const prepSporty = 50;
    const prepCool = 100;

    this.baseBrains = prepBrains;
    this.brains = prepBrains;

    this.baseSporty = prepSporty;
    this.sporty = prepSporty;

    this.baseCool = prepCool;
    this.cool = prepCool;
  }
}

export class Jock extends Character {
  // Methodies Modifies Base Class Attributes
  constructor(name, gender) {
    super(nam, gender);
    this.vitality = 10;
    const jockBrains = 50;
    const jockSporty = 100;
    const jockCool = 50;

    this.baseBrains = jockBrains;
    this.brains = jockBrains;

    this.baseSporty = jockSporty;
    this.sporty = jockSporty;

    this.baseCool = jockCool;
    this.cool = jockCool;
  }
}
