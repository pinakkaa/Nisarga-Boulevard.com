// Section 10 - Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.section10-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form submission logic can be added here
            console.log('Form submitted');
        });
    }
});
