// Erhalte das Header-Element mit der Klasse "headerandnav"
var header = document.querySelector(".headerandnav");

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


function scrollToSubtitle(subtitleId) {
    const headerHeight = document.getElementById("headerandnav").offsetHeight;
    const subtitleElement = document.getElementByClass("untertitel");

    if (subtitleElement) {
        const subtitlePosition = subtitleElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: screenTop - headerHeight,
            behavior: 'smooth'
        });
    }
}
