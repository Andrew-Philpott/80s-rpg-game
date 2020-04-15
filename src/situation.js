import { Character } from "./character.js";

export class Game {
  constructor(player) {
    const lunch = new Situation(
      "Lunch Lady",
      "woman",
      "in the cafeteria",
      75,
      110,
      50
    );
    const bus = new Situation(
      "Bus Driver",
      "man",
      "on the school bus",
      50,
      110,
      75
    );
    const math = new Situation(
      "Math Teacher",
      "man",
      "in math class",
      110,
      75,
      50
    );
    const hall = new Situation(
      "Vice Principal",
      "woman",
      "in the hallway",
      110,
      75,
      50
    );
    const locker = new Situation(
      "School Bully",
      "boy",
      "in the locker room",
      50,
      110,
      75
    );
    const mall = new Situation(
      "Mean Girls",
      "girls",
      "at the mall",
      50,
      75,
      110
    );
    const gym = new Situation(
      "Gym Teacher",
      "man",
      "on the track",
      50,
      100,
      75
    );
    const prom = new Situation(
      "Prom Chaperone",
      "woman",
      "at the dance",
      100,
      100,
      110
    );

    this.player = player;
    this.situations = [lunch, bus, math, hall, locker, mall, gym, prom];
  }

  getRandomSituation(min, max) {
    let situation = Math.floor(Math.random() * (max - min)) + min;
    return this.situations[situation];
  }
}

export class Situation {
  constructor(monster, gender, setting, brains, sporty, cool) {
    this.monster = new Character(monster, gender);
    this.monster.assignStats(10, brains, sporty, cool);
    this.setting = setting;
  }

  getSituationSummary() {
    const summary = `You spot ${this.monster.name} ${this.setting}.`;
    return summary;
  }
}

// const lunch = new Situation("Lunch Lady", "woman", "in the cafeteria", 75, 110, 50);
// const bus = new Situation("Bus Driver", "man", "on the school bus", 50, 110, 75);
// const math = new Situation("Math Teacher", "man", "in math class", 110, 75, 50);
// const hall = new Situation("Vice Principal", "woman", "in the hallway", 110, 75, 50);
// const locker = new Situation("School Bully", "boy", "in the locker room", 50, 110, 75);
// const mall = new Situation("Mean Girls", "girls", "at the mall", 50, 75, 110);
// const gym = new Situation("Gym Teacher", "man", "on the track", 50, 100, 75);
// const prom = new Situation("Prom Chaperone", "woman", "at the dance", 100, 100, 110);

// const situations = [lunch, bus, math, hall, locker, mall, gym, prom];
