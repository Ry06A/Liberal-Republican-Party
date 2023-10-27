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

thisyear = new Date();
document.write(thisyear.getFullYear() );