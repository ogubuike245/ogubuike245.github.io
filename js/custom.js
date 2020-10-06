/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){
// --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
$('.navbar-collapse a').click(function(){
$(".navbar-collapse").collapse('hide');
});
// --------- PORTFOLIO IMAGE ----- //
$('#portfolio a').nivoLightbox({
effect: 'fadeScale',
});
// ------- WOW ANIMATED ------ //
wow = new WOW(
{
mobile: false
});
wow.init();
// ------- GOOGLE MAP ----- //
loadGoogleMap();
// ------- JQUERY PARALLAX ---- //
function initParallax() {

$('#team').parallax("100%", 3.3);

$('#contact').parallax("100%", 2.1);
}
initParallax();
});


(function($) {

  var $window = $(window),
    $body = $('body'),
    $menu = $('#menu'),
    
    
    $sidebar = $('#sidebar'),
    $main = $('#main');

  // Breakpoints.
    breakpoints({
      xlarge:   [ '1281px',  '1680px' ],
      large:    [ '981px',   '1280px' ],
      medium:   [ '737px',   '980px'  ],
      small:    [ '481px',   '736px'  ],
      xsmall:   [ null,      '480px'  ]
    });

  

  // Menu.
    $menu
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $body,
        visibleClass: 'is-menu-visible'
      });

     
      

 

  // Intro.
    var $intro = $('#intro');

    // Move to main on <=large, back to sidebar on >large.
      breakpoints.on('<=large', function() {
        $intro.prependTo($main);
      });

      breakpoints.on('>large', function() {
        $intro.prependTo($sidebar);
      });

})(jQuery);




