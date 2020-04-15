const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1,
  };
};

const changePlantState = (plant, property, value) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + value,
  };
};

const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop]: string,
    });
  };
};

const JeffNerd = changeStateString("name")("jeff");
const MaleNerd = changeStateString("gender")("male");

const changeState = (prop) => {
  return (value) => {
    return (name) => {
      return (state) => ({
        name,
        ...state,
        [prop]: (state[prop] || 0) + value,
      });
    };
  };
};

//const name = changeState("name")(value of input)

//Pass in soil to changestate to set soil
const feed = changeState("soil");
const blueFood = changeState("soil")(5);

//StoreState
const greenFood = changeState("soil")(10);

const stateChanger = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export class RPG {
  constructor(name, gender) {
    this.name = name; // string flavor
    this.gender = gender; // string flavor
    this.vitality; // think of as your health bar
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
    super(name, gender);
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
// Functions that set the attributes of a "Nerd"

const nerdBrains = changeState("brains")(100);
const nerdSports = changeState("sporty")(50);
const nerdCool = changeState("cool")(50);
const nerdVitality = changeState("vitality")(100);
//

// Const that save the state of a Nerds Name and Gender
// in progress
const nerdName = changeState("name")();
const nerdGender = changeState("gender")();

const stateChanger = storeState("billy")("male");

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};
