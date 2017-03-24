var myBind = function(n,obj,arg){
  returner = function(){
    var args = Array.prototype.splice.call(arguments,0);
    if (arg != null) {
      args.unshift(arg);
    }

    return n.apply(obj,args);
  }
  returner.prototype = n.prototype;
  return returner;
}

var obj = {
  name: 'Markov'
}
//
function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}
greetingsTo('Fante');
var boundGreeting = myBind(greetingsTo, obj);
boundGreeting('Fante');

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}
greetingsToAll('Fante', 'Hornby');
var boundToAll = myBind(greetingsToAll, obj);
boundToAll('Fante', 'Hornby');

var boundAndFirst = myBind(greetingsToAll, obj, 'Fante');
boundAndFirst('Hornby');


//////////////////////////////////////////////////////////////////////////////////////////
var createCurryCalc = function(argument){

    var args = Array.prototype.splice.call(arguments,1);
    if (argument != null) {
      args = args.concat(argument);
    }
      var total = 0;
    if (args.length === 5) {

      args.forEach(function(element){
        total = total + element;
      });
      return total;
    }

  return arguments.callee.bind(this,args);
}




var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
console.log(partial(1, 3));

var curryCalc2 = createCurryCalc();
var partial2 = curryCalc2(2);
partial2 = partial2(4, 5)
console.log(partial2(1, 3));

var curryCalc3 = createCurryCalc();
var partial3 = curryCalc3(1);
var partial4 = partial3(2)
var partial5 = partial4(3)
var partial6 = partial5(9)
console.log(partial6(5));


//////////////////////////////////////////////////////////////////////////////////////

var myNew = function(fn){
  var args = Array.prototype.splice.call(arguments,1);
  var obj = {};
  fn.call(obj);
  fn.apply(obj,args);
  Object.setPrototypeOf(obj,fn.prototype);
  return obj;
}

var Lulatsch = function(size,fist){
  this.fist = fist;
  this.size = size;
}

var lala = new Lulatsch(2,"Iron");
console.log(lala);
var lulu = myNew(Lulatsch,2,"Iron");
console.log(lulu);

/////////////////////////////////////////////////////////////////////////////////////////
var createCurry = function(fn){
  return function(argument){

      var args = Array.prototype.splice.call(arguments,1).reverse();

          if (argument != null) {
            if (args.concat(argument).length > fn.length) {
              console.log("To Many Arguments");
              return arguments.callee.bind(this,argument);
            }
            args = args.concat(argument);
          }

          if (args.length === fn.length) {
            return fn(...args.reverse());
          }
        return arguments.callee.bind(this,args);

  }

}


var something = function(num1,num2,num3,num4,num5){
  var sum = num1+num2+num3+num4+num5;
  console.log(sum);
}

var other = function(string1,string2,string3,string4,string5,string6,string7,string8){
  console.log(string1+" "+string2+" "+string3+" "+string4+" "+string5+" "+string6+" "+string7+" "+string8);

}
var curry = createCurry(something);
var curry2 = curry(1);
var curry3 = curry2(9);
var curry4 = curry3(3);
var curry5 = curry4(7);
curry5(5);

var lala = createCurry(other);
var lala2 = lala("Hi","my","name");
var lala3 = lala2("is","king","kingalot");
var lala4 = lala3("the","one","lala");
lala4("the","one");
