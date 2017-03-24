var Person = function(){
  this.legs = 2;
}

Person.prototype.talk = function(){
  console.log("blabla");

}

function myNew(fn){
  var obj = {};
  fn.call(obj);

  // fn = Person constructor
  Object.setPrototypeOf(obj,fn.prototype);
}

var bodgdan = myNew(Person);

Singer.prototype = Object.create(Person.prototype);
