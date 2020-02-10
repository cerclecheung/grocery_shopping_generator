const { breakfast, meal, smoothie } = require("./recipe");
const { convertingUnit } = require("./food");

const ingredientList = {};
const mealList = {};

const generateMeal = (day, meal) => {
  const mealLength = Object.keys(meal).length;
  let i = 0;

  while (i < day) {
    const randomIndex = Math.floor(Math.random() * mealLength);
    const chosenMeal = Object.keys(meal)[randomIndex];
    //update meal list

    if (mealList[chosenMeal]) {
      mealList[chosenMeal]++;
    } else {
      mealList[chosenMeal] = 1;
    }

    //update ingredient list
    let ingredientName;
    for (ingredientName in meal[chosenMeal]) {
      if (ingredientList[ingredientName]) {
        ingredientList[ingredientName] =
          ingredientList[ingredientName] +
          convertingUnit(meal[chosenMeal], ingredientName);
      } else {
        ingredientList[ingredientName] = convertingUnit(
          meal[chosenMeal],
          ingredientName
        );
      }
      // console.log("breakfast", mealList, "ingredient", ingredientList);
    }
    i++;
  }
};

const generateAlltheMeal = day => {
  generateMeal(day, breakfast);
  // generateMeal(2 * day, meal);
  // generateMeal(0.5, smoothie);
  console.log(ingredientList, mealList);
};

generateAlltheMeal(30);
