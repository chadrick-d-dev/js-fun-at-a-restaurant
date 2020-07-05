function nameMenuItem(menuItem) {
  return`Delicious ${menuItem}`;
}

function createMenuItem(name, price, type) {
  return menuItem = {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(string, ingredients) {
  if (ingredients.length === 0) {
    ingredients.push(string);
  } else {
        if (! ingredients.includes(string)) {
        ingredients.push(string);
      }
    }
  }

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * 0.90;
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
