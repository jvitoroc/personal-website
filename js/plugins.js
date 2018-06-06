// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$('#fullpage').fullpage({
  scrollBar: true,
  fitToSection: false,
  autoScrolling: false,
  paddingTop: '0',
  paddingBottom: '0',
  menu: '#menu',
  sectionSelector: '.fp-section',
  bigSectionsDestination: 'top',
  anchors: ['fp-certificates', 'fp-skills', 'fp-education'],
});

  // hack
$("body").attr("style", "overflow-x: hidden !important; height: initial; overflow-y: visible");


//

var workGrid = document.querySelector('.work-grid');

var workIsotope = new Isotope(workGrid, {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});



// var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     x = w.innerWidth || e.clientWidth || g.clientWidth,
//     y = w.innerHeight|| e.clientHeight|| g.clientHeight;

// // Place any jQuery/helper plugins in here.
