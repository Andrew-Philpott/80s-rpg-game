// const initialState = {
//   name: {},
//   gender: {},
//   vitality: {},
//   brains: {},
//   sporty: {},
// };

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1,
//   };
// };

// export const storeStateInitialState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };

// export const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };

// export const changeStateString = (prop) => {
//   return (string) => {
//     return (state) => ({
//       ...state,
//       [prop]: string,
//     });
//   };
// };

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value,
//     });
//   };
// };

// const initialState = {
//   name: "",
//   gender: "",
//   brains: 0,
//   sporty: 0,
//   cool: 0,
//   vitality: 0,
// };

export const storeState = (initialState) => {
  // currentState is always in scope because of its closure
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const leveler = changeState("level")(1);
const life = changeState("life")(false);

// export const battle = (character1, character2, property) => {
//   if (character1[property] > character2[property]) {
//     //character1(leverler);
//     return character1;
//   } else if (character1[property] > character2[property]) {
//     //character2(leveler);
//     return character2;
//   } else return character1, character2;
// };

//winner
export const battleCurriedFunction = (character1) => {
  return (character2) => {
    return (property) => {
      if (character1[property] > character2[property]) {
        return character1;
      } else if (character1[property] > character2[property]) {
        return character2;
      } else return character1, character2;
    };
  };
};

//loser
export const battleCurriedFunctionForLoser = (character1) => {
  return (character2) => {
    return (property) => {
      if (character1[property] > character2[property]) {
        return character2;
      } else if (character1[property] > character2[property]) {
        return character1;
      } else return character1, character2;
    };
  };
};

// export const Leveler = (character) => {
//   return (property) => {
//     return (levelIncrease) => {

//     }
//   }
// }

export const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop]: string,
    });
  };
};

const nerdInitialState = {
  name: "Neil Nerdy Nerd",
  gender: "Male",
  brains: 100,
  sporty: 50,
  cool: 50,
  vitality: 100,
  level: 0,
  life: true,
};

const nerd = storeState(nerdInitialState);

const jockInitialState = {
  name: "Jim Jock the Jockster",
  gender: "Male",
  brains: 50,
  sporty: 100,
  cool: 100,
  vitality: 100,
  level: 0,
  life: true,
};

const jock = storeState(jockInitialState);

const prepInitalState = {
  name: "Perky perby",
  gender: "Female",
  brains: 50,
  sporty: 50,
  cool: 100,
  vitality: 100,
  level: 0,
  life: true,
};

const prep = storeState(prepInitalState);
