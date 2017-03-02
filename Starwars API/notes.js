$(function(){
  fetch("http://swapi.co/api/persons") //browser request
    .then(function(res){
    return res.json();
  })
  .then(function(data){
//  console.log(data); //returns count of all peaople + first 10 persomns
    data.results.forEach(function(person){
    //console.log(person.name); //all names
    var nameElement = $("<p>").text(person.name);
    $(".container").append(nameElemet);
    })
  });
})
//SAME THING
$(function(){
  $.ajax({
    url: "http://swapi.co/api/persons",
    method: "GET",
    success: function(data){
              data.results.forEach(function(person){
                var nameElement = $("<p>")
                .text(person.name)
                .addClass("star-name")
                .attr("homeworld", person.homeworld);
                $(".container").append(nameElemet);
              //  nameElement.on("click", function(e){ // bad verry bad
                //  console.log("you clickede the person");
                }
                })
              });
            })
            //dynamic listeners
    $(".container").on("click",".star-name", function(e){
      console.log("you clickede the person");
      var element = $(e.currentTarget);
      console.log(element.attr("homeworld"));;

    })
})
