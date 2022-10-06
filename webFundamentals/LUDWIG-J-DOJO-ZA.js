function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["mushrooms", "olives", "onions"]);

console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(pizza2);

let pizza3 = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["bacon"]);

console.log(pizza3);

let pizza4 = pizzaOven("sicillian", "marinara", ["mozarella"], ["basil"]);

console.log(pizza4);

function randomPizza(crustType, sauceType, cheeses, toppings) {
    return pizza[Maath.floor(Math.random() * pizza.length)];
}

console.log(randomPizza);