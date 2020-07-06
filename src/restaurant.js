function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
   }
}

function addMenuItem(restaurant, item) {
  if (item.type === "lunch" && ! restaurant.menus.lunch.includes(item)) {
    restaurant.menus.lunch.push(item);
  } else if (item.type === "breakfast" && ! restaurant.menus.breakfast.includes(item)) {
    restaurant.menus.breakfast.push(item);
  } else if (item.type === "dinner" && ! restaurant.menus.dinner.includes(item)) {
    restaurant.menus.dinner.push(item);
  }
}

function removeMenuItem(restaurant, item, type = "breakfast") {
  for (var i=0; i<restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === item) {
      restaurant.menus[type].splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
