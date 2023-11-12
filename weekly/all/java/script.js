// Erhalte das Header-Element mit der Klasse "headerandnav"
var header = document.querySelector(".headerandnav");

// Erhalte alle Sektionen mit der Klasse "untertitel"
var subtitle = document.querySelectorAll(".untertitel");

// Füge ein Scroll-Ereignis hinzu
window.addEventListener("scroll", function() {
    // Überprüfe, ob der Header gescrollt ist und füge die Klasse "scrolled" hinzu
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
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


// Funktion zum Scrollen zu einem bestimmten Untertitel
function scrollToSubtitle(subtitleId) {
    const subtitleElement = document.querySelector(subtitleId);
    if (subtitleElement) {
        const headerAndNavHeight = document.getElementById('headerandnav').offsetHeight;
        const offset = headerAndNavHeight + 50; // 50px unter dem Header und der Navigation

        window.scrollTo({
            top: subtitleElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}



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




