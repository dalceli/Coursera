/**
 * Adds a click event listener to the button with the ID 'myButton'.
 * When the button is clicked, an alert is displayed with the message 'Button was clicked!'.
 */
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

/**
 * Toggles the visibility of the navbar on smaller screens.
 */
function toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
}

/**
 * Show/hide "Back to Top" button based on scroll position.
 */
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

/**
 * Scroll to top functionality.
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
