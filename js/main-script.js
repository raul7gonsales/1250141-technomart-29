(function() {
    var
      cart = document.querySelector(".modal-cart"),
      closeButtons = document.querySelectorAll(".modal-close"),
      buyButtons = document.querySelectorAll(".buy-button"),
      writeUs = document.querySelector(".write-us"),
      feedbackForm = document.querySelector(".feedback-modal"),
      mapLink = document.querySelector(".map-image"),
      mapPopup = document.querySelector(".modal-map");

    for (var i = 0; i < buyButtons.length; i++) {
      buyButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        cart.classList.add("modal-show");
      });
    }
    for (var j = 0; j < closeButtons.length; j++) {
      closeButtons[j].addEventListener("click", function(e) {
        e.preventDefault();
        e.target.closest(".modal").classList.remove("modal-show");
      });
    }

    writeUs.addEventListener("click", function(e) {
      e.preventDefault();
      feedbackForm.classList.add("modal-show");
    });

    mapLink.addEventListener("click", function(e) {
      e.preventDefault();
      mapPopup.classList.add("modal-show");
    });
})();

(function() {
  if (document.querySelector(".offers-slider") != null) {
    var offers_slide_1 = document.querySelector(".offers-slide:nth-child(1)");
    var offers_slide_2 = document.querySelector(".offers-slide:nth-child(2)");
    var slider_control_left = document.querySelector(".slider-control-left");
    var slider_control_right = document.querySelector(".slider-control-right");
    var slider_radio_left = document.querySelector(".slider-radio label:nth-child(1)");
    var slider_radio_right = document.querySelector(".slider-radio label:nth-child(2)");

    var onClick = function() {
      if (offers_slide_1.classList.contains("visually-hidden")) {
        offers_slide_1.classList.remove("visually-hidden");
        offers_slide_2.classList.add("visually-hidden");
        slider_radio_left.querySelector("input").checked = true;
        slider_radio_right.querySelector("input").checked = false;
      } else {
        offers_slide_1.classList.add("visually-hidden");
        offers_slide_2.classList.remove("visually-hidden");
        slider_radio_right.querySelector("input").checked = true;
        slider_radio_left.querySelector("input").checked = false;
      }
    };

    slider_control_left.addEventListener("click", function(event) {
      event.preventDefault();
      onClick();
    });
    slider_control_right.addEventListener("click", function(event) {
      event.preventDefault();
      onClick();
    });

    var interval = setInterval(onClick, 6000);

    slider_control_left.addEventListener("mouseover", function(event) {
      event.preventDefault();
      clearInterval(interval);
    });
    slider_control_right.addEventListener("mouseover", function (event) {
      event.preventDefault();
      clearInterval(interval);
    });

    slider_control_left.addEventListener("mouseout", function(event) {
      event.preventDefault();
      interval = setInterval(onClick, 6000);
    });
    slider_control_right.addEventListener("mouseout", function (event) {
      event.preventDefault();
      interval = setInterval(onClick, 6000);
    });
  }
})();


(function() {
    if (document.querySelector(".services-columns") != null) {
        var services_carousel_controls = document.querySelectorAll(".services-buttons .service-button");
        var services_carousel_contents = document.querySelectorAll(".services .services-description div");
        for (let index = 0; index < services_carousel_controls.length; index++) {
            const element = services_carousel_controls[index];
            element.addEventListener("click", function(event) {
                event.preventDefault();
                services_carousel_contents.forEach(element => {
                    element.classList.add("visually-hidden");
                });
                services_carousel_controls.forEach(element => {
                    element.classList.remove("service-button-active");
                });
                element.classList.add("service-button-active");
                services_carousel_contents[index].classList.remove("visually-hidden");
            });
        }

        var intervalHandler = function() {
            if (services_carousel_controls[0].classList.contains("service-button-active")) {
                services_carousel_controls[0].classList.remove("service-button-active");
                services_carousel_controls[1].classList.add("service-button-active");
                services_carousel_contents[0].classList.add("visually-hidden");
                services_carousel_contents[1].classList.remove("visually-hidden");
            } else {
                if (services_carousel_controls[1].classList.contains("service-button-active")) {
                    services_carousel_controls[1].classList.remove("service-button-active");
                    services_carousel_controls[2].classList.add("service-button-active");
                    services_carousel_contents[1].classList.add("visually-hidden");
                    services_carousel_contents[2].classList.remove("visually-hidden");
                } else {
                    services_carousel_controls[2].classList.remove("service-button-active");
                    services_carousel_controls[0].classList.add("service-button-active");
                    services_carousel_contents[2].classList.add("visually-hidden");
                    services_carousel_contents[0].classList.remove("visually-hidden");
                }
            }
        };

        var interval = setInterval(intervalHandler, 3000);

        document.querySelector(".services .services-buttons").addEventListener("mouseover", function (event) {
            event.preventDefault();
            clearInterval(interval);
        });

        document.querySelector(".services .services-buttons").addEventListener("mouseout", function (event) {
            event.preventDefault();
            interval = setInterval(intervalHandler, 3000);
        });
    }
})();
