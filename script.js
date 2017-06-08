$(document).ready(function(){

//-------------------------banner slider with timer----------------------------
    var f = 800; // fade speed
    var d = 4000; // duration per slide
    var n = $(".slide_element").length; // number of slides
    var w = $(".slide_element").width(); // slide width
    var t = $(".timer .col-xs-3").width(); //timer width
    var i = 0;

    function timer() {
        if (i == 0) {
            $(".time").animate({"width":0}, 0);
        }
        $(".time").eq(i).animate({"width":t}, d);
    }

    function fade() {
        timer();

        $(".slide_element").eq(i).show();

        setInterval(function() {
              $(".slide_element").eq(i).hide();
              if (i == n - 1) {
                  i = 0;
              } else {
                  i++;
              }
              timer();

              if (i == 0) {
                  $("header").removeClass("slide4");
                  $("header").addClass("slide1");
              } else if (i == 1) {
                  $("header").removeClass("slide1");
                  $("header").addClass("slide2");
              } else if (i == 2) {
                  $("header").removeClass("slide2");
                  $("header").addClass("slide3");
              } else if (i == 3) {
                  $("header").removeClass("slide3");
                  $("header").addClass("slide4");
              };

              $(".slide_element").eq(i).fadeIn(f);
        }, d);
    }

    fade();

//------------------------accordion menu down/up glyphicon swap---------------
    $(".collapse").on("shown.bs.collapse", function() {
        $(this).parent().find(".glyphicon-menu-down").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
    });
    $(".collapse").on("hidden.bs.collapse", function() {
        $(this).parent().find(".glyphicon-menu-up").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
    });

//--------------------------------------search--------------------------------
    $(".glyphicon-search").click(function() {
        $(".search").fadeIn(500);
    });
    $(".glyphicon-remove").click(function() {
        $(".search").hide(0);
    });

});
