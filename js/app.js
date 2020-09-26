/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles',
  
  {
    "particles": {
      "number": {
        "value": 15,
        "density": {
          "enable": true,
          "value_area": 300
        }
      },
      "color": {
        "value": "#111010"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 20,
          "color": "pink"
        },
        "polygon": {
          "nb_sides": 9
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 5.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 100,
          "opacity_min": 1.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 1.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#AA09DF",
        "opacity": 0.4,
        "width": 8
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 40,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 1
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#1AFE25",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);