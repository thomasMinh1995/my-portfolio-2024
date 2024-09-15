document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('section-hero');
    if (!textElement) {
        console.error("Element with id 'section-hero' not found.");
        return;
    }

    const originalText = textElement.textContent;
    textElement.textContent = ''; // Clear the text content initially
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < originalText.length) {
            textElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 20); // Adjust typing speed here
        } else {
            // The typing effect is done, do nothing here
        }
    }

    typeEffect();
});
