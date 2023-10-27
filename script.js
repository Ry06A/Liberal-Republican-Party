$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#navi').addClass('active');
    } 
    else {
      $('#navi').removeClass('active');
    }
  });
});
