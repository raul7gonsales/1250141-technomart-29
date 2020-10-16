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
