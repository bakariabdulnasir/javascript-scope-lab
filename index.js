// declaring a variable in global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function with function scoped variable
function addBurger() {
  // Function-scoped variable
  const newBurger = 'Flatburger';
  // Add to global burgers array
  burgers.push(newBurger);
}

// If statement with true condition
if(true) {
  // Block-scoped variable
  const anotherNewBurger = 'Maple Bacon Burger';
  // Add to global burgers array
  burgers.push(anotherNewBurger);
}

// Function to change the global featuredDrink variable
function changeFeaturedDrink() {
  // Changes the global featuredDrink variable
  featuredDrink = 'The JavaShake';
}