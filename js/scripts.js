/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/sw.js');
  });
}

var iframe = document.createElement('iframe');
iframe.src ="https://example.com"
document.body.appendChild(iframe);

// console.log('Helo script')

// const request = new Request('https://example.com/', {method: 'GET', mode:'no-cors'})

// fetch(request)
//   .then(async function(response) {	
// 	var cache = await caches.open('dynamic-v1');    	
// 	await cache.put(request, response)
//       	console.log(response.status)
//       	console.log(response)
//   })
// async function get(){
// const cache = await caches.open('dynamic-v1'); 
// cache.match(request).then(function(response) {
// 	console.log('match found')
// })
// }
// get()
