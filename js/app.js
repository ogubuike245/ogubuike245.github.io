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
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#177C85"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "pink"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "v.jpg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.7,
          "sync": false
        }
      },
      "size": {
        "value": 50,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 60,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 800,
        "color": "#ffffff",
        "opacity": 1.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "move": {
          "distance": 400,
          "line_linked": {
            "opacity": 5
          }
        },
        "bubble": {
          "distance": 4000,
          "size": 40,
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