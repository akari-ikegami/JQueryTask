

$(function(){
  $('nav span').css({
    width: $('nav .current').width(),
    left: $('nav .current').position().left
  });
  $('nav a').mouseover(function(){
    $('nav span').animate({
      'width': $(this).width(),
      'left': $(this).position().left
    });
  });
});

$(window).scroll(function(){
  $('.js-markerScrollAnimation').each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if(scroll > position - windowHeight){
      $(this).addClass('is-active');
    }
  });
});