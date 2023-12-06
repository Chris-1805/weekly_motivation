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



//Calory Intake
function calculate() {
    // Get user inputs
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activityLevel = parseFloat(document.getElementById("activity").value);
    var goal = document.getElementById("goal").value;

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        console.error("Invalid input. Please enter valid numeric values for age, weight, and height.");
        return;
    }

    // Calculate BMR based on gender
    var bmr = (gender === 'male') ?
        88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) :
        447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    // Calculate TDEE based on activity level
    var tdee = bmr * activityLevel;

    // Adjust calorie intake based on goal
    var calorieIntake;
    switch (goal) {
        case 'weightLoss':
            calorieIntake = tdee - 500; // Create a calorie deficit
            break;
        case 'maintenance':
            calorieIntake = tdee; // Maintain current weight
            break;
        case 'weightGain':
            calorieIntake = tdee + 500; // Create a calorie surplus
            break;
        default:
            console.error("Invalid goal. Please select a valid goal.");
            return;
    }

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your estimated daily calorie intake is: " + calorieIntake.toFixed(2) + " calories";

    // Show the result container
    document.getElementById("resultContainer").style.display = "block"; // Change display to "block"
}