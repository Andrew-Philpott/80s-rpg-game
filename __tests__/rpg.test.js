import { Character, Nerd, Prep, Jock, fight } from "../src/character.js";
import { Situation, Game } from "../src/situation.js";
import { changeStateString } from "../src/character-functional.js";
import { storeState } from "../src/character-functional.js";
import { changeState } from "../src/character-functional.js";
import { storeStateInitialState } from "../src/character-functional.js";
import { battle } from "../src/character-functional.js";
import { battleCurriedFunction } from "../src/character-functional.js";
import { battleCurriedFunctionForLoser } from "../src/character-functional.js";
// Functional Programming Version
// brainLeveler is increasing the value of the brains property for the given Charecter

describe("Game", () => {
  const brainLeveler = changeState("brains")(50);
  const sportLeveler = changeState("sporty")(50);
  const coolLeveler = changeState("cool")(50);
  const vitalityLeveler = changeState("vitality")(50);
  const brainDecrease = changeState("brains")(-20);
  const checkInitialState = changeState("vitality")(0);
  const leveler = changeState("level")(1);
  const beaten = changeState("vitality")(-50);
  const life = changeState("life")(false);
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
    level: 0,
    life: true,
  };

  const jock = {
    name: "Jim Jock the Jockster",
    gender: "Male",
    brains: 50,
    sporty: 100,
    cool: 100,
    vitality: 100,
    level: 0,
    life: true,
  };

  //Say you win with the jock and you get the choice of choosing to "gamble" on the next battle type. The gamble is that you have a 50/50 chance of having the next battle match up with the character you last used for the battle

  const prep = {
    name: "Perky perby",
    gender: "Female",
    brains: 50,
    sporty: 50,
    cool: 100,
    vitality: 100,
    level: 0,
    life: true,
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
    level: 0,
  };

  let jockCharecterUpdater;
  let prepCharacterUpdater;
  let nerdCharacterUpdater;

  const JockVsPrep = battleCurriedFunction(jock)(prep);

  const JockVsNerd = battleCurriedFunction(jock)(nerd);

  const PrepVsNerd = battleCurriedFunction(prep)(nerd);

  const JockWinsPrepLoses = battleCurriedFunctionForLoser(jock)(prep);

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
    //We pass in characters to figure out the winner. Doesn't mutate state
    let winner = battleCurriedFunction(jock)(nerd)("cool");
    expect(winner).toEqual(jock);
    //This doesn't mutate original
    let characterUpdater = storeState(winner);
    winner = characterUpdater(leveler);

    expect(winner.level).toEqual(1);
  });

  test("tests the battle mechanic", () => {
    let winner = JockVsPrep("sporty");
    let outcome = leveler(winner);
    expect(outcome.level).toEqual(1);
  });

  test("tests the battle mechanic", () => {
    let loser = JockWinsPrepLoses("sporty");
    let outcome = beaten(loser);
    expect(outcome.vitality).toEqual(50);
  });

  test("tests the battle mechanic", () => {
    let outcome = JockVsPrep("sporty");
    expect(outcome).toEqual(jock);
  });

  test("Tests the battle between nerd and jock with battleCurriedFunction", () => {
    let outcome = JockVsNerd("brains");

    expect(outcome).toEqual(nerd);

    /// this is jock vs prep not nerd
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
