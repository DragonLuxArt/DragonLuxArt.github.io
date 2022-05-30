$(".btn").click(function () {
    $('html, body').animate({
        scrollTop: $('h5').offset().top
    }, 2000);
});

$("#about").click(function () {
    $('html, body').animate({
        scrollTop: $('#AboutMe').offset().top
    }, 2000);
});

$("#portfolio").click(function () {
    $('html, body').animate({
        scrollTop: $('h5').offset().top
    }, 2000);
});

$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $('#footer').offset().top
    },2000);
});

$('.carousel').carousel({
    interval: 4500
  })

