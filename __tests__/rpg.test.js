import { Character, Nerd, Prep, Jock, fight } from "../src/character.js";
import { Situation, Game } from "../src/situation.js";
import { changeStateString } from "../src/character-functional.js";
import { storeState } from "../src/character-functional.js";
import { changeState } from "../src/character-functional.js";
import { storeStateInitialState } from "../src/character-functional.js";
import { battle } from "../src/character-functional.js";
import { battleCurriedFunction } from "../src/character-functional.js";

// Functional Programming Version
// brainLeveler is increasing the value of the brains property for the given Charecter

describe("Game", () => {
  const brainLeveler = changeState("brains")(50);
  const sportLeveler = changeState("sporty")(50);
  const coolLeveler = changeState("cool")(50);
  const vitalityLeveler = changeState("vitality")(50);
  const brainDecrease = changeState("brains")(-20);
  const checkInitialState = changeState("vitality")(0);

  const superAwesomeness = [
    brainLeveler,
    sportLeveler,
    coolLeveler,
    vitalityLeveler,
  ];

  // Further exploration
  // const game = {
  //   playerOne: "",
  //   playerTwo: "",
  //   won:
  //   win: false condition
  // }

  // gameUpdater = storeState(game);

  const nerd = {
    name: "Neil Nerdy Nerd",
    gender: "Male",
    brains: 100,
    sporty: 50,
    cool: 50,
    vitality: 100,
  };

  const jock = {
    name: "Jim Jock the Jockster",
    gender: "Male",
    brains: 50,
    sporty: 100,
    cool: 100,
    vitality: 100,
  };

  const prep = {
    name: "Perky perby",
    gender: "Female",
    brains: 50,
    sporty: 50,
    cool: 100,
  };

  // const initialState = () => {
  //   return { name: "", gender: "", brains: 0, sporty: 0, cool: 0, vitality: 0 };
  // };

  const initialState = {
    name: "",
    gender: "",
    brains: 0,
    sporty: 0,
    cool: 0,
    vitality: 0,
  };

  const JockVsPrep = battleCurriedFunction(jock)(prep);
  let jockCharecterUpdater;
  let nerdCharacterUpdater;
  let prepCharacterUpdater;

  beforeEach(() => {
    jockCharecterUpdater = storeState(jock);
    nerdCharacterUpdater = storeState(nerd);
    prepCharacterUpdater = storeState(prep);
  });

  test("should create a jock character to be updated and then we update  ", () => {
    let newState;
    superAwesomeness.forEach((element) => {
      newState = jockCharecterUpdater(element);
    });
    expect(newState.brains).toEqual(100);
    expect(newState.sporty).toEqual(150);
    expect(newState.cool).toEqual(150);
  });

  test("should create a prep character to be updated and then we update ", () => {
    let newState = prepCharacterUpdater(brainLeveler);
    expect(newState.brains).toEqual(100);
    expect(newState.cool).toEqual(100);
    expect(newState.name).toEqual("Perky perby");
  });

  test("should create a nerd character to be updated and then we update ", () => {
    let newState = nerdCharacterUpdater(brainLeveler);
    expect(newState.brains).toEqual(150);
    expect(newState.cool).toEqual(50);
    expect(newState.name).toEqual("Neil Nerdy Nerd");
  });

  test("tests the battle mechanic", () => {
    let nerd = nerdCharacterUpdater(brainLeveler);
    let jock = jockCharecterUpdater(brainLeveler);
    let outcome = battle(jock, nerd, "cool");
    expect(outcome).toEqual(jock);
  });

  test("tests the battle mechanic", () => {
    let outcome = JockVsPrep("sporty");
    expect(outcome).toEqual(jock);
  });

  test("Tests recursion for brain leveler", () => {
    let outcome = JockVsPrep("sporty");
    expect(outcome).toEqual(jock);
  });
});

// test("should return the player with the higher property value", () => {
//   let JockVPrep = battle(prep, jock, sporty);
// });
// expect(JockVPrep).toEqual(jock);
// });

//

//   test("should return a player with brains set to 200", () => {
//     let newState = stateChanger(nerdBrains);
//     newState = stateChanger(nerdBrains);
//     expect(newState.brains).toEqual(200);
//   });

//   test("should return a player with the name ", () => {
//     let newState = stateChanger(nerdBrains);
//     newState = stateChanger(nerdBrains);
//     newState = stateChanger(nerdBrains);
//     expect(newState.brains).toEqual(300);
//   });
// });

// describe("Player", () => {
//   test("should return a player with the name ", () => {
//     const stateChanger = storeState({
//       name: "",
//       brains: 0,
//       sporty: 0,
//       cool: 0,
//       vitality: 0,
//     });
//     const newState = changeState("sporty")(100);
//     expect(newState.brains).toEqual(100);
//   });
// })
