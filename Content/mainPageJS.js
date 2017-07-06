$(".menuBar").hide();

$(".mainPageTitle").hide();
$(".mainPageUnderTitleText").hide();


var mq = window.matchMedia("(max-width: 1365px)");
if (mq.matches) {

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
        bottom: '35%'
    }, {
        duration: 3000,
        queue: false
    });

    $(".mainPageUnderTitleText").fadeIn(5000, function () {
        queue: false
    });

    $(".mainPageTitle").hover(function () {
        $(".mainPageTitle").animate({
            fontSize: '45px',

        });
    });

    $(".mainPageTitle").mouseleave(function () {
        $(".mainPageTitle").animate({
            fontSize: '55px',
        });
    });

    $(".mainPageUnderTitleText").hover(function () {
        $(".mainPageUnderTitleText").animate({
            fontSize: '30px'
        });
    });

    $(".mainPageUnderTitleText").mouseleave(function () {
        $(".mainPageUnderTitleText").animate({
            fontSize: '40px',
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
}
else {
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
        bottom: '35%'
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

}


var mq = window.matchMedia("(max-width: 480px)");
if (mq.matches) {
    $(".mainPageTitle").animate({
        bottom: '70%'
    }, {
        duration: 4000,
        queue: false
    });

    $(".mainPageTitle").fadeIn(5000, function () {
        queue: false
    });


    $(".mainPageUnderTitleText").animate({
        bottom: '55%'
    }, {
        duration: 3000,
        queue: false
    });

    $(".mainPageUnderTitleText").fadeIn(5000, function () {
        queue: false
    });

    $(".menuLine").hide();
    $(".menuBar").show();

}