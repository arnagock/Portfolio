var shipsObjects = [];
var pilotesLinks = [];
var pilotObjects = [];
var favorites = [];
$(function(){
  $.ajax({
    url: "http://swapi.co/api/films",
    method: "GET",
    success: function(data){
              data.results.forEach(function(film){
                var nameElement = $("<p>")
                  .text(film.title)
                  .addClass("column-item")
                  .addClass("hover")
                  .attr("ships", film.starships)
                  .attr("film", true);
                $("#film-list").append(nameElement);
              })
    }
  });
})

$(".column").on("click",".column-item", function(e){
  if ($(e.currentTarget).attr("film")) {
    $('#starship').empty();
    var nameElement = $("<h2>").text("Starships:");
    $('#starship').prepend(nameElement);
    $('#pilot').empty();
    var element = $(e.currentTarget);
    var shipslinks = element.attr("ships");
    shipslinks = shipslinks.split(",");
    shipslinks.forEach(function(element){
      $.ajax({
        url: element,
        method: "GET",
        success: function(data){
                    shipsObjects.push(data);
                    shipsObjects.forEach(function(spaceship){
                    var nameElement = $("<p>")
                    .text(spaceship.name);
                    if (spaceship.name.length > 25) {
                      nameElement.addClass("tooLong");
                    }
                    nameElement.addClass("column-item")
                    .addClass("hover")
                    .attr("pilot", spaceship.pilots)
                    .attr("spaceship", true);
                    $("#starship").append(nameElement);
                    })
                    shipsObjects = [];
                  }
            })
      });


  }else if ($(e.currentTarget).attr("spaceship")) {
    $('#pilot').empty();
    var nameElement = $("<h2>")
    .text("Pilots:")
    $('#pilot').prepend(nameElement);
    var element = $(e.currentTarget);
    pilotesLinks = element.attr("pilot");
    if (pilotesLinks.length === 0) {
      var nameElement = $("<div>")
      .text("Highly advanced alienraces do not need pilots!!")
      .addClass("tooLong")
      $("#pilot").append(nameElement);

    }else {
      pilotesLinks = pilotesLinks.split(",");
      pilotesLinks.forEach(function(element){
      $.ajax({
          url: element,
          method: "GET",
          success: function(data){
                      pilotObjects.push(data);
                      pilotObjects.forEach(function(pilot){
                      var nameElement = $("<div>")
                      .text(pilot.name);
                      if (pilot.name.length > 25) {
                        nameElement.addClass("tooLong");
                      }
                      nameElement.addClass("column-item")
                      .addClass("hover")
                      .attr("name", pilot.name);
                      var buttims = $("<button>")
                      .text("Add")
                      .addClass("butt")
                      nameElement.append(buttims);
                      $("#pilot").append(nameElement);

                      nameElement = $("<p>")
                      .text("Height: "+pilot.height);
                      $("#pilot").append(nameElement);

                      nameElement = $("<p>")
                      .text("Mass: "+pilot.mass);
                      $("#pilot").append(nameElement);

                      nameElement = $("<p>")
                      .text("Hair color: "+pilot.hair_color);
                      $("#pilot").append(nameElement);

                      nameElement = $("<p>")
                      .text("Skin Color: "+pilot.skin_color);
                      $("#pilot").append(nameElement);
                      })
                      pilotObjects = [];
                    }
              })
        });
    }
  }
});

$(".column").on("click",".butt", function(e){
  if ($(e.currentTarget).attr("delete")) {
    var index = $.inArray($(e.currentTarget).parent().attr("name"),favorites);
    favorites.splice(index, 1);
    $(e.currentTarget).parent().remove();
    if (favorites.length === 0) {
      $('#favorites').empty();
    }
  }

  else if ($.inArray($(e.currentTarget).parent().attr("name"),favorites)=== -1) {
    if (favorites.length === 0) {
      var nameElement = $("<h2>")
      .text("Favorites:")
      $('#favorites').prepend(nameElement);
    }
    var nameElement = $("<div>")
    .text($(e.currentTarget).parent().attr("name"))
    .addClass("column-item")
    var buttims = $("<button>")
    .text("x")
    .addClass("butt")
    .attr("delete", true);
    nameElement.append(buttims);
    $("#favorites").append(nameElement);
    favorites.push($(e.currentTarget).parent().attr("name"));

  }


});
