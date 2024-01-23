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

    //empty textbox method 1
    function clearText() {
        document.getElementById('textBox').textContent = '';
    }

    //empty textbox method 2
    var textBox = document.getElementById('textBox');

    if (textBox) {
        textBox.addEventListener('click', clearText);
    }

    function clearText() {
        if (textBox) {
            textBox.value = '';
        }
    }
});
