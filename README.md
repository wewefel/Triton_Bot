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
   - [Why Triton Bot is Beneficial](#why-triton-bot-is-beneficial)
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

In recent years, chatbots have increasingly become essential tools for enhancing website functionality and user engagement. While several companies offer chatbot services, many of these options are either overly simplistic due to their no-code platforms or prohibitively expensive. Our project introduces a chatbot with infinite scalability and minimal cost, designed to revolutionize how we interact with our users on the UCSD Recreation website.

### Why Triton Bot is Beneficial

#### 24/7 Immediate Support
- **Constant Availability:** Triton Bot operates continuously, providing immediate responses to user inquiries anytime, which is crucial for accommodating users after hours or during peak times when live staff may be unavailable.
- **Enhanced Customer Satisfaction:** Immediate response capabilities can significantly improve user satisfaction, potentially increasing customer retention by offering swift solutions to their needs.

#### Enhancing User Experience
- **Simplified Navigation:** Triton Bot assists users by answering questions, offering recommendations, and guiding them through the website, which simplifies the navigation process and enhances the overall user experience.
- **Increased Engagement:** Improved user experience keeps visitors on the site longer and increases the likelihood of conversion, encouraging repeat visits and engagement.

#### Streamlining Customer Service
- **Efficient Query Handling:** The bot can manage multiple queries at once, reducing the need for a large number of human agents.
- **Effective Query Routing:** It efficiently categorizes and directs queries to appropriate human agents when necessary, enhancing the overall efficiency of customer service operations.

#### Improving Business Operations
- **Operational Efficiency:** By automating routine interactions, Triton Bot allows human agents to focus on complex queries, optimizing operational efficiency and resource allocation.
- **Cost Savings:** Implementing the chatbot is more cost-effective than maintaining a large staff, potentially saving substantial amounts over time. Approximate server costs are $5-10/month, with operational costs for ChatGPT usage around $0.50/1M tokens for input and $1.50/1M tokens for output.

#### Consistent Customer Interactions
- **Reliable Service:** Triton Bot delivers consistent responses based on predefined workflows, ensuring every user receives the same high quality of service.
- **Trust and Reliability:** This consistency builds trust and reliability, as users can expect the same accurate and helpful information with every interaction.

### How It Works (For Non-Programmers)

Think of Triton Bot as customizing a personal ChatGPT assistant. Here’s how it works in simple terms:
  
- **Initial Setup:** We start by defining the chatbot's role, for example: "Assist users by providing information about UCSD Recreation." This setup informs the model about the types of responses it should generate.
  
- **Training:** The model is trained using documents like PDFs from the UCSD Recreation website, creating a robust knowledge base.
  
- **Data Handling:** We utilize LLama Index, a leading data framework, to manage the UCSD Recreation information effectively. This system prepares the data for our large language model, OpenAI's gpt-3.5-turbo-0125, ensuring it can access and understand the necessary information.
  
- **Query Processing:** When a user asks a question, the query is processed by our AI model, which then generates an accurate and helpful response based on the indexed information.

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
