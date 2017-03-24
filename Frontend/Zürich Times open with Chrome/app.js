"use strict";
var collection = [];
var favorites = [];
var favoritesmaxWidth= 0;
$(function(){
  $.ajax({
    url: "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8329a7d4744f42c080f0f9fcb3d811bf",
    method: "GET",
    success: function(data){
      collection.push(data.results);
      collection = collection[0];
      collection.forEach(function(element){
        renderGrid(element);
        renderSlider(element, false);
        changeAnkerWidth();
      })
    }

  });
  buttonListenFav("grid");
  buttonListenFav("container-slider");
  buttonListenDel("container-horizontal");
});

var renderModel = function(element, isfavorite){
  if (element.multimedia.length > 0) {
    var pic = $("<img src="+element.multimedia[3].url+">")
    var picframe = $("<div>")
    .addClass("grid-item");
    if (isfavorite) {
      picframe.attr("id",   favorites.indexOf(element));
    }
    picframe.append(renderButton(element, isfavorite))
    .append(pic);
  }else {
    var pic = $("<img src=nopic.jpg>")
    var picframe = $("<div>")
    .addClass("grid-item");
    if (isfavorite) {
      picframe.attr("id", favorites.indexOf(element));
    }
    picframe.append(renderButton(element, isfavorite))
    .append(pic);
  }
  return picframe;

}
var renderButton= function(element, isfavorite){
  if (isfavorite) {
    var buttims = $("<button>")
      .text("Delete")
      .addClass("buttims");
      var text = $("<h5>")
      .text(element.title);

      var nameElement = $("<div>")
      .append(text)
      .append(buttims);
      return nameElement;
  }else {
    var buttims = $("<button>")
      .text("Favorite")
      .addClass("buttims");

      var text = $("<h5>")
      .text(element.title);

      var nameElement = $("<div>")
      .append(text)
      .append(buttims);
      return nameElement;
  }
}

var renderGrid = function(element){
  $(".grid").append(renderModel(element, false));
}
var buttonListenFav = function(object){
  $("."+object).on("click",".buttims", function(e){
    if (favorites.length === 0) {
      $('.horizontal-scroll').css('transform', 'translateX(' + 0 + 'px)');
    }
      var cardTitle = $(e.currentTarget).parent()[0].firstChild.innerHTML;
      collection.forEach(function(element){
        if (element.title === cardTitle && favorites.indexOf(element) === -1) {
          favorites.push(element);
          renderFavorites();
        }
      });
  });

}

var buttonListenDel = function(object){
$("."+object).on("click",".buttims", function(e){
    var card = $(e.currentTarget).parent()[0].firstChild.innerHTML;
    favorites.forEach(function(element){
      if (element.title === card) {
          favorites.splice(favorites.indexOf(element),1);
      }
    })
    renderFavorites();
});
}
