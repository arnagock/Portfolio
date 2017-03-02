
Math.randomInt = function(n){
  return Math.round(Math.random()*n);
}

var myMath = Object.create(Math);
console.log(myMath.randomInt(5));
console.log(myMath.randomInt(10));
console.log(myMath.random());
console.log(myMath.round(0.5));
/////////////////////////////////////////////////////////////////////
String.prototype.reverse = function(){
    return this.split('')
    .reverse();
}
console.log('hello'.reverse());
///////////////////////////////////////////////////////////////////////////
var myfunction = function(n){
  console.log(n);
}

Array.prototype.myEach = function(fn){
  for (var i = 0; i < this.length; i++) {
    fn.call(null,this[i]);
  }
}
var lala = [1,2,3,4,5];
lala.myEach(myfunction);

/////////////////////////////////////////////////////////////////////////////////////
var myfunction2 = function(n){
  return n*2;
}

Array.prototype.myMap = function(fn){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(fn.call(null,this[i]));
  }
  return newArray;
}
var lala = [1,2,3,4,5];
var pewpew = lala.myMap(myfunction2);
console.log(pewpew);
/////////////////////////////////////////////////////////////////////////////
var isBigEnough = function (value) {
  return value >= 3;
}

Array.prototype.myFilter = function(fn){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (fn.call(null,this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}
var lala = [1,2,3,4,5];
var pewpew = lala.myFilter(isBigEnough);
console.log(pewpew);
