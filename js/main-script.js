(function() {
    var
      cart_modal = document.querySelector(".modal-cart"),
      close_buttons = document.querySelectorAll(".modal-close"),
      buy_buttons = document.querySelectorAll(".buy-button"),
      write_us = document.querySelector(".write-us"),
      feedback_form = document.querySelector(".feedback-modal"),
      map_link = document.querySelector(".map-image"),
      map_popup = document.querySelector(".modal-map");

    for (var i = 0; i < buy_buttons.length; i++) {
      buy_buttons[i].addEventListener("click", function(e) {
        e.preventDefault();
        cart_modal.classList.add("modal-show");
      });
    }
    for (var j = 0; j < close_buttons.length; j++) {
      close_buttons[j].addEventListener("click", function(e) {
        e.preventDefault();
        e.target.closest(".modal").classList.remove("modal-show");
      });
    }

    write_us.addEventListener("click", function(e) {
      e.preventDefault();
      feedback_form.classList.add("modal-show");
    });

    map_link.addEventListener("click", function(e) {
      e.preventDefault();
      map_popup.classList.add("modal-show");
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
