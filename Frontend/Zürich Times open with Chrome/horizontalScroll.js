
$(function() {
  $('.js-scroll-left').on('click', function() {
    if ($('.horizontal-scroll').position().left >= -$(window).width()) {
      $('.horizontal-scroll').css('transform', 'translateX(' + 10 + 'px)');
    }else {
      var newTranslate = $('.horizontal-scroll').position().left + ($(window).width())/10*4;
      $('.horizontal-scroll').css('transform', 'translateX(' + newTranslate + 'px)');
    }

  });

  $('.js-scroll-right').on('click', function() {
      var newTranslate = $('.horizontal-scroll').position().left - ($(window).width())/10*4;
      $('.horizontal-scroll').css('transform', 'translateX(' + newTranslate + 'px)');
      if (newTranslate - ($(window).width())<= -favoritesmaxWidth) {
          var newTranslate = -favoritesmaxWidth + ($(window).width());
          $('.horizontal-scroll').css('transform', 'translateX(' + newTranslate + 'px)');
      }
  });
})

var renderFavorites = function(){
  $(".horizontal-scroll")
  .empty()
  favorites.forEach(function(element){
    $(".horizontal-scroll")
    .append(renderModel(element, true));
  });
  favoriteWidth();
}
var favoriteWidth = function (){
  favoritesmaxWidth = 0;
  for (var i = 0; i < favorites.length; i++) {
    favoritesmaxWidth = favoritesmaxWidth + $("#"+i).width() + 38;
  }
  favoritesmaxWidth+=10; //because of the body padding
}
