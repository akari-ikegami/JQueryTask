
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



$('.title').css({
  left: '-100px',
  opacity: '0.0'
}).animate({
  left: '100px',
  opacity: '1.0'
},3000);


$('img').on('mouseover',function(){
  $(this).css('opacity','0.5');
})
$('img').on('mouseleave',function(){
  $(this).css('opacity','1.0');
});

