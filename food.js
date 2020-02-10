const conversion = {
  cup: { flOunce: 8, tableSpoon: 16, teaSpoon: 48, gram: 200, lbs: 1 / 1.917 },
  flOunce: { cup: 1 / 8, tableSpoon: 2, teaSpoon: 6 },
  tableSpoon: { flOunce: 0.5, cup: 1 / 16, teaSpoon: 3, gram: 200 / 16 },
  teaSpoon: { flOunce: 1 / 6, tableSpoon: 1 / 3, cup: 1 / 48 },
  dryOunce: { gram: 28.3485 },
  gram: { cup: 1 / 200 }
};

const food = {
  oatly: {
    unit: "flOunce",
    amount: 32
  },
  oats: {
    unit: "gram",
    amount: 510
  },
  honey: {
    unit: "flOunce",
    amount: 42
  },
  walnut: {
    unit: "gram",
    amount: 340
  },
  raisin: {
    unit: "gram",
    amount: 454
  },
  coconutflake: {
    unit: "gram",
    amount: 227
  },
  peanutButter: {
    unit: "gram",
    amount: 454
  },
  raisinBran: {
    unit: "gram",
    amount: 567
  },
  flour: {
    unit: "lbs",
    amount: 5
  },
  egg: {
    unit: "solo",
    amount: 12
  }
  // butter: "2+tableSpoon",
  // sugar: "2+tableSpoon",
  // salt: "0.5+tableSpoon",
  // bakingPowder: "1+tableSpoon",
  // whiteVinegar: "2+tableSpoon"
  // instantNoodle: "2+solo",
  // snowPeas: "1+lbs",
  // sausage: "13+dryOunce"
  // acaiPuree: "1+packet",
  // frozenMixedBerryBlend: "0.5+cup",
  // oatly: "1+cup",
  // gronola: "0.3+cup"
};

// const ingredient = { oatly: "1.5+cup" };

const convertingUnit = (ingredients, ingredentName) => {
  console.log(ingredentName);
  let newArr = ingredients[ingredentName].split("+");
  const recipeAmount = newArr[0];
  const recipeUnit = newArr[1];
  const packageUnit = food[ingredentName].unit;

  if (packageUnit === recipeUnit) {
    return Number(recipeAmount);
  } else {
    console.log("not");
    return (
      (conversion[recipeUnit][packageUnit] * recipeAmount) /
      food[ingredentName].amount
    );
  }
};
// convertingUnit("oatly");
module.exports = { convertingUnit };
