function myFunction() {
    var x = document.getElementById("loader");
    var y = document.getElementById("close");
    var u = document.getElementById("slider")
   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
      u.style.display = "none";

     
    } else {
      x.style.display = "none";
      y.style.display = "none";
      u.style.display = "block";
    }
  }

  function myFunction1() {
    var x = document.getElementById("loader");
    var y = document.getElementById("close");
    var u = document.getElementById("slider");
    var b = document.getElementById("back");
   
    if (b.style.display === "block") {
      b.style.display = "none";
      x.style.display = "block";
      y.style.display = "block";
u.style.display = "block";
     
    } else {
      b.style.display = "none";
      x.style.display = "block";
      u.style.display = "none";
      y.style.display = "block";
      y.style.margin = "0 auto";
    }
  }
  


  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }