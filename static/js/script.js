$(document).ready(function() {
    function initializeChat() {
        var greetingMessage = "Hi, I am Triton Bot! Ask me anything and I will do my best to answer.";
        $('.chat-box-body').append(`
            <div class="chat-box-body-receive">
                <div class="chat-bot-icon-container">
                    <img src="/static/images/ucsd_rec.png" alt="Chatbot Icon" class="chatbot-icon">
                </div>
                <div class="chat-message-container">
                    <p>${greetingMessage}</p>
                    <span>${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
            </div>
        `);
    }
    // Existing code for chat box and modal toggling
    $('.chat-button').on('click', function() {
        //$('.chat-button').css({"display": "none"});
        $('.chat-box').css({"visibility": "visible"});
        $('.chat-button').hide();
        initializeChat();
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
        var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        if (message !== '') {
            $('.chat-box-body').append(`<div class="chat-box-body-send"><p>${message}</p><span>${currentTime}</span></div>`);
            $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
            $('.chat-box-footer input').val('');
    
            $.ajax({
                type: 'POST',
                url: '/ask', // Ensure this is the correct endpoint
                data: {message: message},
                success: function(data) {
                    var botResponse = data.response || "I didn't understand that.";
                    $('.chat-box-body').append(`
                        <div class="chat-box-body-receive">
                            <div class="chat-bot-icon-container">
                                <img src="/static/images/ucsd_rec.png" alt="Chatbot Icon" class="chatbot-icon">
                            </div>
                            <div class="chat-message-container">
                                <p>${botResponse}</p>
                                <span>${currentTime}</span>
                            </div>
                        </div>
                    `);
                    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
                },
                error: function() {
                    $('.chat-box-body').append(`
                        <div class="chat-box-body-receive">
                            <div class="chat-bot-icon-container">
                                <img src="/static/images/ucsd_rec.png" alt="Chatbot Icon" class="chatbot-icon">
                            </div>
                            <div class="chat-message-container">
                                <p>Sorry, I'm having trouble understanding you right now.</p>
                                <span>${currentTime}</span>
                            </div>
                        </div>
                    `);
                    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
                }
            });
        }
    }
});
