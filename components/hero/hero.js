// Hero image fade animation
document.addEventListener('DOMContentLoaded', function() {
    const heroImage1 = document.getElementById('heroImage1');
    const heroImage2 = document.getElementById('heroImage2');
    const images = [heroImage1, heroImage2];
    let currentImageIndex = 0;

    function switchImage() {
        // Remove active class from current image
        images[currentImageIndex].classList.remove('active');
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // Add active class to new image
        images[currentImageIndex].classList.add('active');
    }

    // Switch images every 5 seconds
    setInterval(switchImage, 5000);
});
