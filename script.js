document.addEventListener("DOMContentLoaded", function () {

    //scroll to top button
    var backToTopButton = document.getElementById('top');
    function toggleButtonVisibility() {
        if (window.scrollY > 0) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    }

  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    backToTopButton.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', toggleButtonVisibility);

    //empty textbox
    function clearText() {
        document.getElementById('textBox').textContent = '';
    }
  });
  