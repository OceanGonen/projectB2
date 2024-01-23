document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById('top');
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    backToTopButton.addEventListener('click', scrollToTop);
  });
  