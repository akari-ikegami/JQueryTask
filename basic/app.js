
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

$(function(){
  $('img').hover(function(){
    $(this).stop().animate({'opacity':'0.5'});
  },function(){
    $(this).stop().animate({'opacity':'1'});
  });
});