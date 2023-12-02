// script.js

window.addEventListener('scroll', function() {
    var header = document.querySelector('.headerandnav');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('totop');
    if (window.pageYOffset > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - document.querySelector('.headerandnav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Calculator
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const valueWeight = document.getElementById('valueweight');
    const valueHeight = document.getElementById('valueheight');
    const resultContainer = document.getElementById('result');
    const calculateButton = document.getElementById('BMIButton'); // Replace 'calculateButton' with the id of your button

    weightInput.addEventListener('input', updateBMI);
    heightInput.addEventListener('input', updateBMI);
    calculateButton.addEventListener('click', calculateBMI);

    function updateBMI() {
        valueWeight.textContent = weightInput.value;
        valueHeight.textContent = heightInput.value;
    }

    function calculateBMI() {
        const weight = parseInt(weightInput.value);
        const height = parseInt(heightInput.value);
        // Perform your BMI calculation here
        const bmi = weight / ((height / 100) * (height / 100));  // Example calculation
        resultContainer.textContent = + bmi.toFixed(2);
    }
});

