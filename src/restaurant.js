function createRestaurant(name) {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {};
    restaurant.menus.breakfast =[];
    restaurant.menus.lunch =[];
    restaurant.menus.dinner =[];
  return restaurant;
}


function addMenuItem(restaurant, menuObj) {
  if (menuObj.type === "lunch" && !restaurant.menus.lunch.includes(menuObj)) {
    restaurant.menus.lunch.push(menuObj);
  } else if (menuObj.type === "breakfast" && !restaurant.menus.breakfast.includes(menuObj)) {
    restaurant.menus.breakfast.push(menuObj);
  } else if (menuObj.type === "dinner" && !restaurant.menus.dinner.includes(menuObj)) {
    restaurant.menus.dinner.push(menuObj);
  }
  return restaurant;
}

function removeMenuItem(restaurant, deleteObj, typeOfMenu) {
  if (restaurant.menus[typeOfMenu].length === 0) {
    return `Sorry, we don't sell ${deleteObj}, try adding a new recipe!`
  } else {
    for (var i=0; i<restaurant.menus[typeOfMenu].length; i++) {
    restaurant.menus[typeOfMenu].splice(i, 1);
  }
    return `No one is eating our ${deleteObj} - it has been removed from the ${typeOfMenu} menu!`;
}
//Note on the above: was stuck thinking it should be restaurant.menus.typeOfMenu however JS recognizes the type string as an array name in this case.
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
