$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
  
    function showSlide(index) {
      slides.removeClass('active');
      slides.eq(index).addClass('active');
    }
  
    $('.next').click(function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    $('.prev').click(function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  });
  