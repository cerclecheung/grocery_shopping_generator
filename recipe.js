// //unit:
// const tableSpoon = [butter, salt, sugar, vinegar, peanutButter];
// const cup = [milk, flour, walnut, raisin, frozenMixedBerryBlend];
// const packet = [acaiPuree, instantNoodle];
// const lbs = [snowPeas];
// const oz = [sausage];

const breakfast = {
  //oatMeal, panCake, gronola, cereal
  oatMeal: {
    oatly: "1.5+cup",
    oats: "0.7+cup",
    honey: "0.1+tableSpoon",
    walnut: "0.2+cup",
    raisin: "0.2+cup",
    coconutflake: "0.2+cup",
    peanutButter: "4+tableSpoon"
  },
  cereal: {
    oatly: "1.5+cup",
    raisinBran: "2+cup"
  },
  panCake: {
    oatly: "0.75+cup",
    flour: "1+cup",
    egg: "1+solo"
    //   butter: "2+tableSpoon",
    //   sugar: "2+tableSpoon",
    //   salt: "0.5+tableSpoon",
    //   bakingPowder: "1+tableSpoon",
    //   whiteVinegar: "2+tableSpoon"
  }
};

const meal = {
  sausageNoodle: {
    instantNoodle: "2+solo",
    snowPeas: "1+lbs",
    sausage: "13+dryOunce"
  }
};

const smoothie = {
  acaiBowl: {
    acaiPuree: "1+packet",
    frozenMixedBerryBlend: "0.5+cup",
    oatly: "1+cup",
    gronola: "0.3+cup"
  }
};

module.exports = { breakfast, meal, smoothie };
