var Ingredient = function(name, cost) {
  this.name = name;
  this.cost = cost;
}
module.exports.Ingredient = Ingredient;
var cheese = new Ingredient('Cheese', 5);
var pepperoni = new Ingredient('Pepperoni', 10);
var dough = new Ingredient('Dough', 2);
var lettuce = new Ingredient('Lettuce', 3);
var tomato = new Ingredient('Tomato', 4);

var Dish = function(name, price, ingredients) {
  this.name = name;
  this.price = price;
  this.ingredients = ingredients;
}
module.exports.Dish = Dish;

Dish.prototype.cost = function() {
  return this.ingredients.reduce(function(acc, ingredient) {
    return acc + ingredient.cost;
  }, 10);
}
module.exports.cost = Dish.prototype.cost;
Dish.prototype.profit = function() {
  return this.price - this.cost();
}
module.exports.profit = Dish.prototype.profit;
var pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
var salad = new Dish('Salad', 30, [lettuce, cheese, tomato]);
module.exports.pizza = pizza;
module.exports.salad = salad;
var pluto = {
  name: 'Pluto',
  id: 1
};
var goofy = {
  name: 'Goofy',
  id: 2
};

var Restaurant = function() {
  this.orders = {};
}
//module.exports.restaurant = Restaurant;

Restaurant.prototype.orderDish = function(dish, client) {
  if (!this.orders[client.id]) {
    this.orders[client.id] = [dish];
    return;
  }

  this.orders[client.id].push(dish);
}
module.exports.orderDish = Restaurant.prototype.orderDish;

Restaurant.prototype.printOrders = function(client) {
  console.log(client.name);
  console.log(this.orders);
  var result = [];
  if (!this.orders[client.id]) {
    throw Error;
  }
  this.orders[client.id].forEach(function(dish, index) {
    console.log('Order #' + index + ': ' + dish.name + ' - ' + dish.price);
    result.push([index,dish.name,dish.price]);
  });
  return result;
}
module.exports.printOrders = Restaurant.prototype.printOrders;

Restaurant.prototype.printCheck = function(client) {
  this.printOrders(client);
  var results =   this.printOrders(client);
  console.log('Total: ' + this.totalPrice(client));
  return [results, this.totalPrice(client)];
}
module.exports.printCheck = Dish.prototype.printCheck;

Restaurant.prototype.totalPrice = function(client) {
  return this.orders[client.id].reduce(function(acc, dish) {
    return dish.price + acc;
  }, 0);
}
module.exports.totalPrice = Dish.prototype.totalPrice;
  var restaurant = new Restaurant();
module.exports.restaurant = restaurant;
// restaurant.orderDish(pizza, goofy);
// restaurant.printCheck(goofy);
// restaurant.orderDish(pizza, pluto);
// restaurant.orderDish(salad, pluto);
// restaurant.printCheck(pluto);
