// Section 4 - Amenities Navigation
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('amenitiesPrev');
    const nextButton = document.getElementById('amenitiesNext');
    const sections = document.querySelectorAll('.section4-content');
    let currentSection = 0;
    
    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    
    function nextSection() {
        currentSection = (currentSection + 1) % sections.length;
        showSection(currentSection);
    }
    
    function prevSection() {
        currentSection = (currentSection - 1 + sections.length) % sections.length;
        showSection(currentSection);
    }
    
    if (prevButton && nextButton && sections.length > 0) {
        prevButton.addEventListener('click', prevSection);
        nextButton.addEventListener('click', nextSection);
        
        // Initialize first section
        showSection(0);
    }
});
