$(".menuBar").hide();

$(".mainPageTitle").hide();
$(".mainPageUnderTitleText").hide();

$(".mainPageTitle").animate({
    bottom: '50%'
}, {
    duration: 4000,
    queue: false
});

$(".mainPageTitle").fadeIn(5000, function () {
    queue: false
});


$(".mainPageUnderTitleText").animate({
    bottom: '40%'
}, {
    duration: 3000,
    queue: false
});

$(".mainPageUnderTitleText").fadeIn(5000, function () {
    queue: false
});

$(".mainPageTitle").hover(function () {
    $(".mainPageTitle").animate({
        fontSize: '60px',

    });
});

$(".mainPageTitle").mouseleave(function () {
    $(".mainPageTitle").animate({
        fontSize: '70px',
    });
});

$(".mainPageUnderTitleText").hover(function () {
    $(".mainPageUnderTitleText").animate({
        fontSize: '40px'
    });
});

$(".mainPageUnderTitleText").mouseleave(function () {
    $(".mainPageUnderTitleText").animate({
        fontSize: '50px',
    });
});


$(".menuLine").hover(function () {
    $(".menuLine").fadeOut("slow", function () {
        $(".menuBar").slideDown("slow");
    });
});


$(".menuBar").mouseleave(function () {
    $(".menuBar").fadeOut("slow", function () {
        $(".menuLine").fadeIn("slow");
    });
});

