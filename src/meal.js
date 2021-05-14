function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(ingredient, cost, time) {
     var menuItem = {
       name: undefined,
       price: undefined,
       type: undefined
  }
      menuItem.name = ingredient;
      menuItem.price = cost;
      menuItem.type = time;

      return menuItem;
}

function addIngredients(moreIngred, target) {
  var ingredients = [];
  if (target.includes(moreIngred)) {
    return ingredients;
  } else {
  return target.push(moreIngred);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(preSalePrice) {
  return preSalePrice * 0.9;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: undefined,
    ingredients: undefined,
    type: undefined
  }
  recipe.title = title;
  recipe.ingredients = ingredients;
  recipe.type = menuItemType;

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
