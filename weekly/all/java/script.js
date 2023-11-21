// Erhalte das Header-Element mit der Klasse "headerandnav"
var header = document.querySelector(".headerandnav");
// Erhalte das Header-Element mit der ID "headerandnav" statt der Klasse "headerandnav"
var header = document.getElementById("headerandnav");



function scrollToSubtitle(subtitleId) {
    const headerHeight = header.offsetHeight; // Use header variable
    const subtitleElement = document.querySelector(subtitleId); // Correct typo
    
    if (subtitleElement) {
        const subtitlePosition = subtitleElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: subtitlePosition - headerHeight, // Use the correct variables
            behavior: 'auto'
        });
    }
}

// Erhalte alle Sektionen mit der Klasse "untertitel"
var subtitle = document.querySelectorAll(".untertitel");

// Füge ein Scroll-Ereignis hinzu
window.addEventListener("scroll", function() {
    // Überprüfe, ob der Header gescrollt ist und füge die Klasse "scrolled" hinzu
      if (header !== null && window.scrollY > 0) {
        header.classList.add("scrolled");
      } else if (header !== null) {
        header.classList.remove("scrolled");
      }
    // Überprüfe jede Sektion
    subtitle.forEach(function(subtitle) {
        // Überprüfe, ob die untere Kante des Header-Bereichs den oberen Rand der Sektion berührt
        if (header.getBoundingClientRect().bottom >= subtitle.getBoundingClientRect().top) {
            // Füge die CSS-Klasse "transparent" hinzu, um die Schriftfarbe zu ändern
            subtitle.classList.add("transparent");
        } else {
            // Entferne die CSS-Klasse, wenn nicht berührt
            subtitle.classList.remove("transparent");
        }
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

