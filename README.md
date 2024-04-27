<a name="top"></a>



<br />
<div align="center">

  <h3 align="center">UC San Diego Chatbot</h3>

  <p align="center">
    AI chatbot assistant for website using ChatGPT integration!
  </p>
</div>

![image](https://github.com/wewefel/Triton_Bot/assets/99102919/86a1a901-7b9b-4476-a827-b18a4cc69f0b)


## Table of Contents
1. [About The Project](#about-the-project)
   - [Why Triton Bot is Helpful](#why-triton-bot-is-helpful)
   - [How it Works (for non-programmers)](#how-it-works-for-non-programmers)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Virtual Environment](#virtual-environment)
   - [OpenAI Key](#openai-key)
   - [Run the Chatbot!](#run-the-chatbot)
3. [Usage](#usage)
4. [License](#license)
5. [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

In the recent year, chatbots have gained tremendous popularity as methods of improving website functionality and usability. There are several companies offering chatbot builders, but these services are often oversimplified due to their no-code implementation and extremely expensive.
However, the chatbot used in this project has infinite scalability and requires little-to-no cost.

### Why Triton Bot is Helpful
* **24/7 immediate support**  
  * Chatbots are available around the clock, meaning they can provide immediate responses to customer inquiries at any time, day or night. This is particularly valuable because it caters to customers who may seek help outside of standard business hours or when staff is overwhelmed.
  * Immediate response times can significantly boost customer satisfaction and can be a deciding factor in retaining customers who seek instant solutions.
* **Enhancing user experience**
  * A chatbot can make navigating a website easier by answering questions, providing recommendations, and guiding users through the site, which enhances the overall user experience.
  * Good user experience keeps visitors on your website longer and encourages them to return, increasing the likelihood of converting visits into sales.
* **Streamlining customer service**
  * Chatbots can handle a large volume of queries simultaneously, something that would require many human agents otherwise.
  * They can quickly sort and direct queries to the appropriate channels if human intervention is needed, thus streamlining the customer service process.
  * This helps in managing customer service during high traffic times without compromising the quality of service.
* **Improving business operations**
  * By automating responses and handling routine inquiries, chatbots free up human agents to focus on more complex and high-value interactions.
  * This optimization of workload can lead to more efficient business operations, as resources can be better allocated, leading to faster resolution of issues and more personalized customer service where it counts.
* **Cost efficient**
  * Implementing a chatbot is significantly more cost-effective than employing a full-time staff for customer service. Chatbots reduce the labor cost involved in handling customer interactions, especially those that are routine and repetitive.
  * Over time, this can lead to significant cost savings, allowing UCSD Recreation to invest resources elsewhere to grow their business.
  * Approximate server cost: $5-10/month. Cost of ChatGPT: Input $0.50/1M (million) tokens, Output $1.50/1M (million) tokens.
    * Tokens = pieces of words. Basically, it is extremely cheap.
* **Consistent customer interactions**
  * Chatbots provide a consistent level of service with every interaction. They follow predefined workflows and responses, ensuring that every customer receives the same information and quality of service.
  * This consistency helps in building trust and reliability, as customers feel confident that they will receive the same helpful and accurate information every time they interact with the chatbot.
* **And more!**

[Back to Top](#top)

### How it Works (for non-programmers)

A very simple way of viewing this chatbot is customizing our own personal ChatGPT assistant by giving it prompts and specific training information.  
  
For example, an oversimplified prompt could look like "Your role is to assist users by providing information about UCSD Recreation." This helps inform our model what type of answers it should give.  
  
Then the model is given training data as PDFs of the UCSD Recreation website. This is the primary knowledge base of our chatbot.  
  
  
The chatbot is built using LLama Index, an industry-leading data framework which loads the UCSD Recreation information and stores it in a way that allows our large language model (LLM) - in this case OpenAI's gpt-3.5-turbo-0125 - to understand.  
After our training information is properly indexed, the user's query is passed to our AI model to generate a response.  
  
Brief explanation of each file:  

1. **main.py** - Initializing the AI of the Chatbot:
* Core of the chatbot. Puts pieces together to create the final form of our AI agent.
2. **pdf.py** - Handling PDF Data:
* Loads data from a PDF file, the chatbot's knowledge base.
* Builds an index from this data, allowing the chatbot to efficiently search and retrieve information from the PDF when answering queries.
* (Can be updated to handle many other forms of data simultaneously).
3. **prompts.py** - Setting Up Query Templates:
* Defines templates for queries that your chatbot might receive, helping it understand how to process and respond to various types of inquiries.
* Gives an instruction set for converting user queries into executable code, specifically aimed at processing data.
* Establishes a context or purpose for the chatbot, which in this case is to provide information about UC San Diego Recreation facilities.
4. **app.py** - Web Application Interface:
* Uses Flask, a web framework, to create a web interface for your chatbot.
* Sets up web routes, which are essentially paths users can navigate to interact with your chatbot through a web page.
* Defines functions for what should happen when users visit these routes, like displaying the chat interface or handling a query sent by a user.
5. **index.html** - The Web Page:
* Defines the structure of the web page where users can interact with the chatbot.
* Includes elements like text boxes and buttons that users will use to input their questions.

6. **style.css** - Styling the Web Page:
* Adds styles to the web page, defining how elements should look visually (like colors, fonts, and layouts) to make the user interface appealing and easy to use.

7. **script.js** - Interactivity of the Web Page:
* Makes the web page interactive. Handles user actions, like clicking the submit button after typing a question, and ensures that these actions trigger responses from the chatbot.

[Back to Top](#top)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

1. **Ensure Python 3.9.0 or greater is installed:**
* Before starting, make sure Python 3.9.0 or any newer version is installed on your system. You can check this by running python3 --version in your terminal or command prompt. If it’s not installed, you should install it from the official Python website [here](https://www.python.org/downloads).
2. **Install Git:**
* If you don't already have Git installed on your computer, you'll need to install it first. You can download Git from [here](https://git-scm.com/).
3. **Open Your Terminal or Command Prompt:** Navigate to the directory where you want to clone the repository (this example uses desktop as the directory, but feel free to change).
* On Windows:
   ``` sh
   cd Desktop
   ```
* On Mac or Linux:
   ``` sh
   cd ~/Desktop
   ```
* Then clone the repository:
   ``` sh
   git clone https://github.com/wewefel/Triton_Bot.git
   ```
[Back to Top](#top)


### Virtual Environment

_Creating a virtual environment is important for maintaining its own dependencies independent of other projects. This prevents conflicts between package versions that can lead to bugs and compatibility issues._

1. **If Triton_Bot is on your desktop, use this command to navigate to the directory:**
* Windows:
  ``` sh
  cd Desktop\Triton_Bot
  ```
* Mac or Linux:
  ``` sh
  cd ~/Desktop/Triton_Bot
  ```
2. **Once you are inside the Triton_Bot directory, create the virtual environment using:**
   ``` sh
   python3 -m venv env
   ```
* This command creates a new folder in the TritonBot directory called 'env' where the virtual environment files will be stored.
3. **Activate the Virtual Environment:**
* Windows:
  ``` sh
  env\Scripts\activate
  ```
* Mac or Linux:
  ``` sh
  source env/bin/activate
  ```
4. **Install Requirements:**
* With the virtual environment activated, install all the packages listed in the requirements.txt file by running:
  ``` sh
  pip install -r requirements.txt
  ```
5. **Make sure the script is being run in your virtual environment.** For example, in VS Code it should say 'Python 3.9.0 env' at the bottom of your screen, and in the VS Code command prompt you should see '(env)' before your username.

[Back to Top](#top)

### OpenAI Key
1. If you have not already, create an OpenAI profile [here](https://platform.openai.com/).
2. On the left side of your screen, click on "API keys", then click "Create new secret key".
3. Copy the secret key (it should be a long strong of random letters and numbers) and store it in the .env.example file.
4. Rename ".env.example" to ".env".


### Run the Chatbot!
1. Run app.py.
2. Ctrl + Click the local host in the command prompt.
3. Talk to the chatbot!
4. Make sure all of your imports are inside your virtual environment folder and that you are running the script inside your virtual environment.

[Back to Top](#top)

<!-- USAGE EXAMPLES -->
## Usage
* Model is already pretrained on the most common questions asked by UCSD Recreation patrons.
  * Ex: "When is RIMAC open?" "Is there open rec basketball today?" "Are you open over summer break?"
* If user input does not match a predefined question, Triton Bot will search through training data (rec.pdf) to find an answer.
* If Triton Bot still cannot answer the question, it will state that it does not understand and direct the user to contact customer service.

[Back to Top](#top)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

Wallace Wefel - [LinkedIn](https://www.linkedin.com/in/wallace-wefel-67a932104/) - wewefel@ucsd.edu


[Back to Top](#top)
