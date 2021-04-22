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
  });

  $(document).ready(function() {
    $("#work1").mouseover(function() {
        $("#overlay1").show();
    }).mouseout(function() {
        $("#overlay1").hide();
    });
});

$(document).ready(function() {
    $("#work2").mouseover(function() {
        $('#overlay2').show();
    }).mouseout(function() {
        $('#overlay2').hide();
    });
});

$(document).ready(function() {
    $("#work3").mouseover(function() {
        $("#overlay3").show();
    }).mouseout(function() {
        $("#overlay3").hide();
    });
});


$(document).ready(function() {
    $("#work4").mouseover(function() {
        $("#overlay4").show();
    }).mouseout(function() {
        $("#overlay4").hide();
    });
});

$(document).ready(function() {
    $("#work5").mouseover(function() {
        $("#overlay5").show();
    }).mouseout(function() {
        $("#overlay5").hide();
    });
});
$(document).ready(function() {
    $("#work6").mouseover(function() {
        $("#overlay6").show();
    }).mouseout(function() {
        $("#overlay6").hide();
    })
});
$(document).ready(function() {
    $("#work7").mouseover(function() {
        $("#overlay7").show();
    }).mouseout(function() {
        $("#overlay7").hide();
    });
});
$(document).ready(function() {
    $("#work8").mouseover(function() {
        $("#overlay8").show();
    });
    $(document).mouseout(function() {
        $("#overlay8").hide();
    });
});  

$("form#mc-embedded-subscribe-form").submit(function(){
  var name= $("input#mce-FNAME").val();
  var form = document.getElementsByName("mc-embedded-subscribe-form") [0];
  if ($("input#mce-FNAME").val() && $("input#mce-FNAME").val()){
    alert(name + ",thank you for reaching out to us.");
    form.reset();
    return false;
  } else {
    alert("Please enter your name and email address!")
  }
})
