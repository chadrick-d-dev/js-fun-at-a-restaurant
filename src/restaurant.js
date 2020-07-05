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

function removeMenuItem() {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
