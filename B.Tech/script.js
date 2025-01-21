document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target ID
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling effect
            block: 'start' // Align to the start of the section
        });
    });
});
 // JavaScript to handle the accordion functionality
 const accordions = document.getElementsByClassName("accordion");
        
 for (let i = 0; i < accordions.length; i++) {
     accordions[i].addEventListener("click", function() {
         this.classList.toggle("active");
         const panel = this.nextElementSibling;
         if (panel.style.display === "block") {
             panel.style.display = "none";
         } else {
             panel.style.display = "block";
         }
     });
 }
 
// Function to handle accordion functionality with exclusive panel display
function setupAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    const panels = document.querySelectorAll('.panel');

    accordions.forEach((accordion, index) => {
        accordion.addEventListener('click', function () {
            // Hide all panels
            panels.forEach(panel => {
                panel.style.display = 'none';
            });

            // Toggle the clicked panel
            const panel = panels[index];
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
}

// Initialize the accordion functionality
setupAccordion();
// Function to handle accordion functionality with exclusive panel display
function setupAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    const panels = document.querySelectorAll('.panel');

    accordions.forEach((accordion, index) => {
        accordion.addEventListener('click', function () {
            // Hide all panels
            panels.forEach((panel, panelIndex) => {
                if (panelIndex !== index) {
                    panel.style.display = 'none';
                }
            });

            // Toggle the clicked panel
            const panel = panels[index];
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
}

// Initialize the accordion functionality
setupAccordion();

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const semestersSection = document.getElementById("semesters");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        const sectionTop = semestersSection.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= sectionTop) {
            scrollToTopButton.style.display = "block"; // Show the button
        } else {
            scrollToTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll smoothly to the top when button is clicked
    scrollToTopButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
