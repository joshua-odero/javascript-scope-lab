//Global scope variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

function addBurger(){
  const newBurger = "Flatburger";
  burgers.push(newBurger);

  /* console.log(`The new burger is: ${newBurger}`); //You can also inspect the availability of this function scope variable
  console.log(`The new array after adding new burger is: ${burgers}`); //You can also inspect this function scope variable after adding a new burger */

  if(true){
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);

    /* console.log(`Another new burger is: ${anotherNewBurger}`); //You can also inspect this block scope variable
    console.log(`The new array after adding another new burger is: ${burgers}`); //You can also inspect this block scope variable after  adding another new burger */
  }
}

function changeFeaturedDrink(){

    featuredDrink = "The JavaShake";
    return featuredDrink;
    /* console.log(`The changed featured drink is: ${featuredDrink}`); //You can also inspect this function scope variable */
    
}

//Call the functions to execute them
//addBurger();
//changeFeaturedDrink();

/* //You can also inspect global scope variables after calling the functions
console.log(burgers);
console.log(featuredDrink); */

