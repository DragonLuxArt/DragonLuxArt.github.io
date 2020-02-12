$(".btn").click(function () {
    $('html, body').animate({
        scrollTop: $('.col-sm-3').offset().top
    }, 2000);
});

$("#about").click(function () {
    $('html, body').animate({
        scrollTop: $('#AboutMe').offset().top
    }, 2000);
});

$("#portfolio").click(function () {
    $('html, body').animate({
        scrollTop: $('.col-sm-3').offset().top
    }, 2000);
});

$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $('#footer').offset().top
    },2000);
});

