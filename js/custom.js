$(document).ready(function(){
  $('.close').hide();
  $('.nav-toggle').click(function(){
    $('.mainnav').slideToggle(500)
  });
  $('.open').click(function(){
    $('.close').show();
    $('.open').hide();
  });
  $('.close').click(function(){
    $('.open').show();
    $('.close').hide();
  });
  // $(function(){
  //   if ('.open') {
  //     $('#c-img-mobile').slideDown();
  //   } else {
  //     $('#c-img-mobile').slideUp();
  //   }
  // });
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
