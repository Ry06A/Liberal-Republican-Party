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

document.getElementById("current-year").innerText = new Date().getFullYear();