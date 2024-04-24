$(document).ready(function() {
    // Existing code for chat box and modal toggling
    $('.chat-button').on('click', function() {
        //$('.chat-button').css({"display": "none"});
        $('.chat-box').css({"visibility": "visible"});
        $('.chat-button').hide();
    });

    $('.chat-box-header p').on('click', function() {
        $('.chat-box').css({"visibility": "hidden"}); // Hide the chat box
        $('.chat-button').show();
    });

    $('#addExtra').on('click', function() {
        $('.modal').toggleClass('show-modal');
    });

    $('.modal-close-button').on('click', function() {
        $('.modal').toggleClass('show-modal');
    });

    $('.chat-box-footer .send').on('click', function() {
        sendMessage();
    });

    $('#chat-form').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission/reloading the page
        sendMessage();
    });

    function sendMessage() {
        var message = $('.chat-box-footer input').val().trim();
        if (message !== '') {
            // Display user message
            var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            $('.chat-box-body').append(`<div class="chat-box-body-send"><p>${message}</p><span>${currentTime}</span></div>`);

            // Scroll to the latest message
            $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);

            // Clear input field
            $('.chat-box-footer input').val('');

            // Send message to backend and get response
            $.ajax({
                type: 'POST',
                url: '/ask', // Replace '/ask' with your chatbot endpoint
                data: {message: message},
                success: function(data) {
                    // Ensure you're accessing the correct part of the response object
                    var botResponse = data.response || "I didn't understand that.";
                    $('.chat-box-body').append(`<div class="chat-box-body-receive"><p>${botResponse}</p><span>${currentTime}</span></div>`);
                    // Scroll to the latest message
                    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
                },
                error: function() {
                    // Error handling, display a default error message
                    $('.chat-box-body').append(`<div class="chat-box-body-receive"><p>Sorry, I'm having trouble understanding you right now.</p><span>${currentTime}</span></div>`);
                    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
                }
            });
        }
    }
});

