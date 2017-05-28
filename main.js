$(document).scroll(function() { 
  
  if($(window).scrollTop() === 0) {
    console.log('top');
    if($("header").hasClass('removePadding')){
      $("header").removeClass('removePadding');  
    }
  }
  else{
    console.log('notTop');
    if(!$("header").hasClass('removePadding')){
      $("header").addClass('removePadding'); 
    }
  }
  
});

$(document).ready(function() {
  $(".thumbnail").hover(
    function() {
      $(this)
        .find(".caption")
        .animate({ opacity: 1, width: "100%", height: "100%" }, 300);
    },
    function() {
      $(this)
        .find(".caption")
        .animate({ opacity: 0, width: "50%", height: "50%" }, 500);
    }
  );

  function scrollAppear(element) {
    var topOfElement = element.offset().top;
    var bottomOfElement = element.offset().top + element.outerHeight(true);

    $(window).bind("scroll", function() {
      var scrollTopPosition = $(window).scrollTop() + $(window).height();
      var windowScrollTop = $(window).scrollTop();

      if (
        scrollTopPosition > topOfElement &&
        scrollTopPosition < bottomOfElement
      ) {
        element.animate(
          {
            opacity: 1
          },
          1500
        );
      }
    });
  }

  $(".navLinks").click(function() {
    $(".mainSections").animate({ opacity: 1 }, 1500);
    $("#footer").animate({ opacity: 1 }, 1500);
    $(".pageDivider").animate({ opacity: 1 }, 1500);
  });

  scrollAppear($(".portfolio"));
  scrollAppear($(".contact"));
  scrollAppear($(".pageDivider"));
});
