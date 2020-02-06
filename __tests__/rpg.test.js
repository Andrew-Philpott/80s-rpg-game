import {Character, Nerd, Prep, Jock, fight} from '../src/character.js';

describe("Character", () => {
  test('Should correctly create character object', () => {
    let steven = new Character("Steven", "Boy");
    expect(steven.name).toEqual("Steven");
    expect(steven.gender).toEqual("Boy");
    expect(steven.vitality).toEqual(undefined);
    expect(steven.brains).toEqual(undefined);
    expect(steven.sporty).toEqual(undefined);
    expect(steven.cool).toEqual(undefined);


  })
  test('Should correctly return the start string', () => {
    let steven = new Character("Steven", "Boy");
    expect(steven.openingString()).toEqual("You begin your journey through the harsh landscape of 80s pop culture. You're a Boy. You've also chosen to call yourself Steven.");
  })

  test('the assignStat function should correctly assign the passed-in value to the passed-in stat', function() {
    let steven = new Character("Steven", "Boy");
    steven.assignStat("sporty", 100);
    expect(steven.sporty).toEqual(100);
  })

  test('the assignStats function should correctly assign the passed-in values to each stat', function() {
    let steven = new Character("Steven", "Boy");
    steven.assignStats(50, 100, 200, 300);
    expect(steven.vitality).toEqual(50);
    expect(steven.sporty).toEqual(200);
    expect(steven.brains).toEqual(100);
    expect(steven.cool).toEqual(300);
  })
})

describe("Nerd", () => {
  test('Should correctly create Nerd object', () => {
    let steven = new Nerd("Steven", "Boy");
    expect(steven.name).toEqual("Steven");
    expect(steven.gender).toEqual("Boy");
    expect(steven.vitality).toEqual(10);
    expect(steven.brains).toEqual(100);
    expect(steven.sporty).toEqual(50);
    expect(steven.cool).toEqual(50);
    expect(steven.baseBrains).toEqual(100);
    expect(steven.baseSporty).toEqual(50);
    expect(steven.baseCool).toEqual(50);
  })
  test('Should correctly return the start string', () => {
    let steven = new Nerd("Steven", "Boy");
    expect(steven.openingString()).toEqual("You begin your journey through the harsh landscape of 80s pop culture. You're a Boy. You've also chosen to call yourself Steven.");
  })

})

describe("Prep", () => {
  test('Should correctly create Prep object', () => {
    let krista = new Prep("Krista", "girl");
    expect(krista.name).toEqual("Krista");
    expect(krista.gender).toEqual("girl");
    expect(krista.vitality).toEqual(10);
    expect(krista.brains).toEqual(50);
    expect(krista.sporty).toEqual(50);
    expect(krista.cool).toEqual(100);
    expect(krista.baseBrains).toEqual(50);
    expect(krista.baseSporty).toEqual(50);
    expect(krista.baseCool).toEqual(100);
  })
})

describe("Jock", () => {
  test('Should correctly create Jock object', () => {
    let npc = new Jock("Chad", "boy");
    expect(npc.name).toEqual("Chad");
    expect(npc.gender).toEqual("boy");
    expect(npc.vitality).toEqual(10);
    expect(npc.brains).toEqual(50);
    expect(npc.sporty).toEqual(100);
    expect(npc.cool).toEqual(50);
    expect(npc.baseBrains).toEqual(50);
    expect(npc.baseSporty).toEqual(100);
    expect(npc.baseCool).toEqual(50);
  })
})

describe ("fight()", () => {
  test ('should return winner of the fight and increase/decrease level accordingly', () => {
    let npc = new Jock("Chad", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(fight(steven, npc, "fistFight")).toEqual(npc);
    expect(npc.vitality).toEqual(12);
    expect(steven.vitality).toEqual(9);
    expect(npc.sporty).toEqual(120);
    expect(steven.sporty).toEqual(45);
  })

  test('should return false if there is a tie, but each player level should increase by 1', () => {
    let npc = new Nerd("Arnold", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(fight(steven, npc, "fistFight")).toEqual(false);
    expect(npc.vitality).toEqual(11);
    expect(steven.vitality).toEqual(11);
  })

})