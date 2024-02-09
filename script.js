$(document).ready(function () {
  $('.title').click(function () {
    $('.container').addClass('open');
    $('body').addClass('card-open');
    $('.click-me-container').fadeIn(); // Show the click-me-container
  });

  $('.close').click(function () {
    $('.container').removeClass('open');
    $('body').removeClass('card-open');
    $('.click-me-container').fadeOut(); // Hide the click-me-container
  });
});


