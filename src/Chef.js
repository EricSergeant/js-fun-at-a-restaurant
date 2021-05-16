class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
//questions: the constructor allows us to make new objects, but these aren't returned in the code.  Are they avilable outside of the class?  Are they if return keyword was added within the constructor?

greetCustomer(name, bool) {
  if (bool === true) {
    return `Good morning, ${name}!`;
} else {
  return `Hello, ${name}!`;
}
}

checkForFood(item) {
  //note: it seems to be pulling info from restaurant.js per test file line 7
  if(this.restaurant.menus[item.type].includes(item)) {
    return `Yes, we're serving ${item.name} today!`;
  } else {
    return `Sorry, we aren't serving ${item.name} today.`;
  }
}

}

module.exports = Chef;
