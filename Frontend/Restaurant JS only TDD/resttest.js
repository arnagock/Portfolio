var test = require('tape');
var exercises = require('./restaurant.js');
var test = require('tape-catch')

var pluto = {
  name: 'Pluto',
  id: 1
};
var goofy = {
  name: 'Goofy',
  id: 2
};
exercises.restaurant.orderDish(exercises.pizza, pluto);
exercises.restaurant.orderDish(exercises.salad, pluto);

test('cost function', function(t) {
  t.test('pizzaandsalad cost', function(t) {
  t.true(exercises.pizza.cost(),35);
  t.true(exercises.salad.cost(),30);
  t.end();
});

t.test('totalprice cost', function(t) {
  t.true(exercises.restaurant.totalPrice(pluto),65);
t.end();
});
});

test('printOrders function', function(t) {
  t.test('test printOrders', function(t) {
  t.deepEqual(exercises.restaurant.printOrders(pluto),[[0,"Pizza",35],[1,"Salad",30]]);
  t.throws(function() { exercises.restaurant.printOrders(goofy); });
  t.end();
});
});

test('printCheck function', function(t) {
  t.test('test printCheck', function(t) {
  t.deepEqual(exercises.restaurant.printCheck(pluto),[[[0,"Pizza",35],[1,"Salad",30]],65]);
  t.throws(function() { exercises.restaurant.printCheck(goofy); });
  t.end();
});
});
