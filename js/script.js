$(function() {
    $("#design-image").click(function() {
        $("#design-image").slideToggle();
            $("#design").slideToggle();
    });
    $("#design").click(function(){
        $("#design").slideToggle();
                $("#design-image").slideToggle();
     });


    $("#development-image").click(function() {
      $("#development-image").toggle();
        $("#development").toggle();
    });
    $("#development").click(function(){
        $("#development-image").slideToggle();
            $("#development").slideToggle();
            });




    $("#product-image").click(function() {
        $("#product-image").slideToggle();
            $("#product").slideToggle();
    });
    $("#product").click(function(){
        $("#product").slideToggle();
            $("#product-image").fadeIn();
    });

    $(".text").hide();
      $("image").animate({
        opacity: 1
    });

  });
