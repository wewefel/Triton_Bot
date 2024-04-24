from flask import Flask, render_template, request, jsonify
import sys
from python.main import chat_with_bot

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    try:
        user_message = request.form['message']
        # Your logic to get the bot's response
        response_message = chat_with_bot(user_message)
        if response_message is None or response_message == "":
            # Fallback message if the response is uncertain or empty
            response_message = "Hmm, I'm not quite sure what you're asking. Could you clarify?"
    except Exception as e:
        # Log the error and provide a friendly error message
        print(f"Error processing user message: {str(e)}")
        response_message = "Oops, something went wrong on my end. Could you try asking something else?"
    
    return jsonify({'response': response_message})

if __name__ == '__main__':
    app.run(debug=True)