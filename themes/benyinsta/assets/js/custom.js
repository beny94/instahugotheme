$(document).ready(function() {
    // Save the original content
    var originalContent = $('.profile-publications').html();

    // Apply active class to publications-menu by default
    $('.publications-menu').addClass('active');

    // Function to handle the fade-in and fade-out effect
    function updateContent(newContent) {
        var $profilePublications = $('.profile-publications');

        // Add fade-out class to initiate fade-out effect
        $profilePublications.addClass('fade-out');

        // After the fade-out animation ends, update the content and start fade-in animation
        $profilePublications.one('animationend', function() {
            $profilePublications.removeClass('fade-out')
                                .html(newContent)
                                .addClass('fade-in');

            // Remove the fade-in class after the animation ends to reset the state
            $profilePublications.one('animationend', function() {
                $profilePublications.removeClass('fade-in');
            });
        });
    }

    // Function to handle the CSS class toggle
    function toggleActiveClass(addClassSelector, removeClassSelector) {
        $(addClassSelector).addClass('active');
        $(removeClassSelector).removeClass('active');
    }

    // Handle click event for PAGES
    $('.igtv h6').click(function() {
        var newContent = $('#new-content-template').html();
        updateContent(newContent);

        // Add active class to igtv and remove from publications-menu
        toggleActiveClass('.igtv', '.publications-menu');
    });

    // Handle click event for POST
    $('.publications-menu h6').click(function() {
        updateContent(originalContent);

        // Add active class to publications-menu and remove from igtv
        toggleActiveClass('.publications-menu', '.igtv');
    });
});
