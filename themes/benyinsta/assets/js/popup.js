    // JavaScript for toggling the popup

    document.querySelectorAll('.photo img').forEach(item => {
        item.addEventListener('click', event => {
            const photoUrl = event.target.getAttribute('data-popup');
            if (window.innerWidth <= 768) {
                window.location.href = photoUrl; // Load photo1.html directly
            } else {
                document.getElementById('popup-iframe').src = photoUrl; // Load photo1.html in iframe
                document.querySelector('.popup').classList.add('show');
            }
        });
    });

    // Close the popup when the close button is clicked
    document.querySelector('.close').addEventListener('click', () => {
        closePopup();
    });

    // Close the popup when the Escape key is pressed
    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    function closePopup() {
        document.querySelector('.popup').classList.remove('show');
    }

    // Listen for messages from the iframe
window.addEventListener('message', function(event) {
    //console.log('Message received from iframe:', event.data);
    if (event.data === 'iframeClick') {
        // If the message indicates that a click occurred inside the iframe, close the popup
        closePopup();
    }
});