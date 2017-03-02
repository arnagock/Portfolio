var bla = id ===1 ? true : false;


var selector = "."+"container";
var container = $(selector);
var cell = $("<div>")
cell.addClass("cell orange");
//var cell =$("<div>").addClass("cell orange");   does same as 2 cells above
cell.attr ("custom", "some-data");
//container.append(cell);
$(document).on('keypress', function(e) {
  console.log(e.key);
  if (e.key === "w") {

  }else if (e.key === "s") {

  }else if (e.key === "a") {

  }else if (e.key === "d") {

  }
})

var button = $("button")
var dondon = function(e){ // e is the click event
  console.log(this); //returns html object this===e.currentTarget
  console.log($(this)); //returns JS object
  console.log("click");
  console.log(e);
  e.preventDefault(); //for links will not forward you
  container.append(cell);
}
button.on('click', dondon);
//prepend add as first in 1. element

$() is a function that retur^ns the html element as an JS object
.html(); replaces element
.empty(); cleans it out
.remove(); kills it and all its children

cell.attr("custom", "some-data");
.attr(); adds attribute html will show custom="some-data"
if you use just 1 string then it will try to get the value of that string

cell.attr("some-data");
will get some-data value from html

.on ("typeofevent", functionstocall); (like eventlistener)
class/id/href etc. are etributes

.preventDefault();
links/forms -> will denie default // if you have no phone or adress for example

functionsstyle
play();

methodstyle
game.play();

constructorstyle


console.log("before");

$(function(){//executed at the end
console.log("mid")
});
same as document.ready(){


}

console.log("after");

result: before after mid
