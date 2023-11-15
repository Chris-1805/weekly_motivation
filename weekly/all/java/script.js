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





// Function to load and display content from a text file
function loadTextFileContent(textFilePath, targetElementId) {
    fetch(textFilePath)
        .then(response => response.text())
        .then(content => {
            document.getElementById(targetElementId).innerHTML = content;
        })
        .catch(error => {
            console.error("Error loading content: " + error);
        });
}

// Call the function to load content from the text file and display it
loadTextFileContent("weekly\all\text\Conzept.txt", "conzept-content");


// Calculator
var slider = document.getElementById("weight");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

