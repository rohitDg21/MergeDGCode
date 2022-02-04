function wpb_wrapper() {
    var reveals = document.querySelectorAll(".wpb_wrapper");
  
    for (var i = 0; i < wpb_wrapper.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        wpb_wrapper[i].classList.add("active");
      } else {
        wpb_wrapper[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", wpb_wrapper);