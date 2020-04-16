export const storeState = (nerd) => {
  let currentState = nerd;
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

export const battle = (character1) => {
  return (character2) => {
    return (property) => {
      if (character1[property] > character2[property]) {
        return [character1, character2];
      } else if (character1[property] < character2[property]) {
        return [character2, character1];
      } else return [{}, {}];
    };
  };
};

const LifeChecks = (object) => {
  return (vitality) => {
    if (character.vitality == 0) {
      return character.life === false;
    }
  };
};

export const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop]: string,
    });
  };
};

const brainLeveler = changeState("brains")(50);
const sportLeveler = changeState("sporty")(50);
const coolLeveler = changeState("cool")(50);
const vitalityLeveler = changeState("vitality")(50);
const brainDecrease = changeState("brains")(-20);
const checkInitialState = changeState("vitality")(0);
const leveler = changeState("level")(1);
const beaten = changeState("vitality")(-50);
const life = changeState("life")(false);

//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
//     };
//   };
// };
//This is battle abstracted out
// export const compare = (ojbOne) => {
//   return (objTwo) => {
//     return (property) => {
//       if (ojbOne[property] > objTwo[property]) {
//         return [ojbOne, objTwo];
//       } else if (ojbOne[property] > objTwo[property]) {
//         return [objTwo, ojbOne];
//       } else return [{}, {}];
//     };
//   };
// };
