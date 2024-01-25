// script.js

window.addEventListener('scroll', function() {
    var header = document.querySelector('.headerandnav');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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


function calculateBMI() {
    console.log("calculateBMI function called");

    const weightInput = document.getElementById('weightBMI');
    const heightInput = document.getElementById('heightBMI');
    const resultContainer = document.getElementById('resultBMI');

    console.log("Weight:", weightInput.value, "Height:", heightInput.value);

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || weightInput.value === '' || heightInput.value === '') {
        resultContainer.textContent = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    resultContainer.textContent = "Your BMI equals: " + bmi.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('BMIButton');
    calculateButton.addEventListener('click', calculateBMI);
    console.log("Event listener attached to BMI button");
});

//Calory Intake
function calculate() {
    // Get user inputs
    var age = parseInt(document.getElementById('ageC').value);
    var gender = document.getElementById('genderC').value;
    var weight = parseFloat(document.getElementById('weightC').value);
    var height = parseFloat(document.getElementById('heightC').value);
    var activityLevel = parseFloat(document.getElementById('activityC').value);
    var goal = document.getElementById('goalC').value;

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
    var resultElement = document.getElementById("resultC");
    resultElement.textContent = "Your estimated daily calorie intake is: " + calorieIntake.toFixed(2) + " calories";

    // Show the result container
    document.getElementById("resultContainer").style.display = "block"; // Change display to "block"
}