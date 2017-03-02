var selector = "."+"container";
var container = $(selector);
var cell = $("<div>")
var position;


var createGrid = function(){
  container.empty();
  var row = 1;
  var col = 1;
  for (var i = 1; i < 26; i++) {
    var cell = $("<div>");
    container.append(cell);
    cell.addClass("cell");
    cell.attr("data-row", row);
    cell.attr("data-col", col);
    if (i % 5 === 0) {
      row +=1;
    }
    if (col % 5 === 0) {
      col = 0;
    }
    col +=1;
  }
};

var getPosition = function(element){
  var row =element.attr("data-row");
  var col =element.attr("data-col");
  position = [row,col];
};

var changeColor = function(){
  // var cell = container.find("[data-row='" + position[0]+ "']" + "[data-col='" + position[1]+ "']");
  var cell = $('.active');
  cell.removeClass("active");
  $(this).addClass("active");
  getPosition($(this));
};
var addPosition = function (element){
 if (element==="4") {
    return "5";
  }else if (element==="3") {
    return "4";
  }else if (element==="2") {
    return "3";
  }else if (element==="1") {
    return "2";
  }else if (element==="5") {
    return "1";
  }
}

var subPosition = function (element){
 if (element==="4") {
    return "3";
  }else if (element==="3") {
    return "2";
  }else if (element==="2") {
    return "1";
  }else if (element==="5") {
    return "4";
  }else if (element==="1") {
    return "5";
  }
}
createGrid();
$(".cell").on('click', changeColor);



$(document).on('keypress', function(e) {
      var cell = $(".active");
      cell.removeClass("active");
  if (e.key === "w") {
      position = [subPosition(position[0]),position[1]]
  }else if (e.key === "s") {
    position = [addPosition(position[0]),position[1]]
  }else if (e.key === "a") {
    position = [position[0],subPosition(position[1])]
  }else if (e.key === "d") {
  position = [position[0],addPosition(position[1])]
  }
    var cell = container.find("[data-row='" + position[0]+ "']" + "[data-col='" + position[1]+ "']");
    cell.addClass("active");
})




/*$(".cell").each(randomizeGrid);
setInterval(function(){
  createGrid();
  $(".cell").each(randomizeGrid);
}, 1000);
*/

//prepend add as first in 1. element
