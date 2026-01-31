// Navbar scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Handle scroll event
    function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Handle mobile menu toggle
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});
