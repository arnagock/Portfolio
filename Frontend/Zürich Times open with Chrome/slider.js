$(function() {
  var countSlide =1;
  $('.js-slide-left').on('click', function() {
    if ($('.anker').position().left >= -$(window).width()) {
      $('.anker').css('transform', 'translateX(' +0+ 'px)');
    }else {
      //var firstSlide = $('.slide:first-child:first-child');
      var newTranslate = $(".anker").position().left + 1200;
      $('.anker').css('transform', 'translateX(' + newTranslate + 'px)');
      countSlide-=1;
    }
  });

  $('.js-slide-right').on('click', function() {

    if (countSlide === collection.length) {

    }else {
      var newTranslate = $(".anker").position().left - 1200;
      $('.anker').css('transform', 'translateX(' + (newTranslate - 345.5) + 'px)');
      countSlide+=1;
    }
  });
})

//inside HOLDER
var renderSlider = function(element, isfavorite){
    if (element.multimedia.length > 0) {
      var pic = $("<img src="+element.multimedia[4].url+">").addClass("imgSlider");
      var picframe = $("<div>")
      .addClass("slide")
      .attr("id", "a"+collection.indexOf(element))
      .append(renderButton(element, isfavorite))
      .append($("<p>").text(element.abstract))
      .append(pic);
    }else {
      var pic = $("<img src=nopic.jpg>").addClass("imgSlider");
      var picframe = $("<div>")
      .addClass("slide")
      .attr("id", "a"+collection.indexOf(element))
      .append(renderButton(element, isfavorite))
      .append($("<p>").text(element.abstract))
      .append(pic);
    }
    $(".anker").append(picframe);
}

var changeAnkerWidth = function(){
  var totalWidth = 0;
  for (var i = 0; i < collection.length; i++) {
    totalWidth = totalWidth + $("#a"+i).width();
  }
$(".anker").css("width", totalWidth+"px");

}
