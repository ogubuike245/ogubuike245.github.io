// ------- GLOBAL VARIABLES -------//
const header = document.querySelector('.navbar');
const logo = document.querySelector('.navbar-brand');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
// ------- END OF GLOBAL VARIABLES -------//-----------------------------
// ------- JQUERY STRICT -------//
(function($) {
"use strict"; // Start of use strict
// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
$('html, body').animate({
scrollTop: (target.offset().top - 72)
}, 120, "easeInOutExpo");
return false;
}
}
});
// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
$('.navbar-collapse').collapse('hide');
});
// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
target: '#mainNav',
offset: 75
});
// Collapse Navbar
var navbarCollapse = function() {
if ($("#mainNav").offset().top > 100) {
$("#mainNav").addClass("navbar-scrolled");
} else {
$("#mainNav").removeClass("navbar-scrolled");
}
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);
// ------- PRELOADER -------//
// $(window).load(function() {
// $('.preloader').fadeOut(1000) // set duration in brackets
// });
// -------END OF  PRELOADER -------//
/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
})(jQuery);
// -------END USE STRICT------ //--------------------------------------------
// ------- WOW ANIMATION ------ //
$(function() {
wow = new WOW({
mobile: true
});
wow.init();
});
// ------- END WOW ANIMATION ------ //--------------------------------------------------
// -------NAVIGATION BAR CUSTOMIZATION------ //
document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
if (scroll_position > 100) {
header.style.backgroundColor = 'crimson';
logo.style.color = 'black';
link1.style.color = 'black';
link2.style.color = 'black';
link3.style.color = 'black';
link4.style.color = 'black';
} else {
header.style.backgroundColor = 'transparent';
logo.style.color = 'white';
link1.style.color = 'white';
link2.style.color = 'white';
link3.style.color = 'white';
link4.style.color = 'white';
}
});
// -------END OF NAVIGATION BAR CUSTOMIZATION------ //
// -------RELLAX JS CUSTOMIZATION------ //
var rellax = new Rellax('.rellax', { horizontal: true, vertical: true });
// -------END OF RELLAX JS CUSTOMIZATION------ //
// -------SIMPLE PARALLAX JS CUSTOMIZATION------ //
var image = document.getElementsByClassName('pyth');
new simpleParallax(image, {
scale: 1.4,
orientation: 'upright',
overflow: true
});
var image = document.getElementsByClassName('adobei');
new simpleParallax(image, {
scale: 1.4,
orientation: 'left',
overflow: true
});
var image = document.getElementsByClassName('djan');
new simpleParallax(image, {
scale: 1.4,
orientation: 'right',
overflow: true
});
var image = document.getElementsByClassName('java');
new simpleParallax(image, {
scale: 1.4,
orientation: 'left',
overflow: true,
transition: 'ease-in-out',
});
var text = document.getElementsByClassName('service-text');
new simpleParallax(text, {
scale: 1.3,
orientation: 'down',
overflow: true
});
// -------END OF  SIMPLE PARALLAX JS CUSTOMIZATION------ ///
//DAISY JS CUSTOMIZATION ---------///
document.addEventListener('DOMContentLoaded', function() {
daisyjs(document.getElementById('momoland'), {
dotColor: 'white',
lineColor: 'pink'
});
}, true);
//// END OF DAISY JS CUSTOMIZATION -----------------------------============///
// var myFullpage = new fullpage('#fullpage', {
//         anchors: ['firstPage'],
//         autoScrolling: false,
//         css3: true,
//         fitToSection: false,
//         verticalCentered: false,
//     });
// =======================================================
// (function() {
//         const link = document.querySelectorAll('nav > .hover-this');
//         const cursor = document.querySelector('.cursor');
//         const animateit = function(e) {
//             const span = this.querySelector('nav');
//             const { offsetX: x, offsetY: y } = e, { offsetWidth: width, offsetHeight: height } = this,
//             move = 25,
//                 xMove = x / width * (move * 2) - move,
//                 yMove = y / height * (move * 2) - move;
//             span.style.transform = `translate(${xMove}px, ${yMove}px)`;
//             if (e.type === 'mouseleave') span.style.transform = '';
//         };
//         const editCursor = e => {
//             const { clientX: x, clientY: y } = e;
//             cursor.style.left = x + 'px';
//             cursor.style.top = y + 'px';
//         };
//         link.forEach(b => b.addEventListener('mousemove', animateit));
//         link.forEach(b => b.addEventListener('mouseleave', animateit));
//         window.addEventListener('mousemove', editCursor);
//     })();
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\