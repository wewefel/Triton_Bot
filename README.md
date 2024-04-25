



<br />
<div align="center">

  <h3 align="center">UC San Diego Chatbot</h3>

  <p align="center">
    AI chatbot assistant for website using ChatGPT integration!
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#how-it-works">How it Works</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#virtual-environment">Virtual Environment</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

In the recent year, chatbots have gained tremendous popularity as methods of improving website functionality and usability. There are several companies offering chatbot builders, but these services are often oversimplified due to their no-code implementation and extremely expensive.
However, the chatbot used in this project has infinite scalability and requires little-to-no cost.

Here's why you should use this chatbot:
* 24/7 immediate support
* Enhancing user experience
* Streamlining customer service
* Improving business operations
* Cost efficient
* Consistent customer interactions
* And more!

### How it Works (for non-programmers)

1. main.py - Initializing the Chatbot:
This file is the core of your chatbot. It starts by loading necessary configurations and setting up tools that your chatbot will use. Specifically, it:

* Establishes a connection to a data source or service, represented here as "rec_engine", which seems to handle queries related to "UC San Diego Recreation".
* Initializes a chatbot with a predefined model ("gpt-3.5-turbo-0125") capable of understanding and generating human-like text.
* Defines a function, chat_with_bot, which takes user input, processes it through the chatbot, and returns the chatbot's response. If the chatbot is unsure, it asks for clarification.
2. pdf.py - Handling PDF Data:
This file manages interactions with PDF documents. It:

Loads data from a PDF file, presumably containing information relevant to the chatbot's knowledge base.
Builds or loads an index from this data, allowing the chatbot to efficiently search and retrieve information from the PDF when answering queries.
3. prompts.py - Setting Up Query Templates:
This file seems to define templates for queries that your chatbot might receive, helping it understand how to process and respond to various types of inquiries. It:

Defines an instruction set for converting user queries into executable code, specifically aimed at processing data.
Establishes a context or purpose for the chatbot, which in this case is to provide information about UC San Diego Recreation facilities.
4. app.py - Web Application Interface:
This script uses Flask, a web framework, to create a web interface for your chatbot. It:

Sets up web routes, which are essentially paths users can navigate to interact with your chatbot through a web page.
Defines functions for what should happen when users visit these routes, like displaying the chat interface or handling a query sent by a user.
5. index.html - The Web Page:
This is the HTML file that defines the structure of the web page where users can interact with the chatbot. It includes elements like text boxes and buttons that users will use to input their questions.

6. style.css - Styling the Web Page:
This CSS file adds styles to the web page, defining how elements should look visually (like colors, fonts, and layouts) to make the user interface appealing and easy to use.

7. script.js - Interactivity of the Web Page:
This JavaScript file makes the web page interactive. It handles user actions, like clicking the submit button after typing a question, and ensures that these actions trigger responses from the chatbot.



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

1. Ensure Python 3.9.0 or greater is installed:
* Before starting, make sure Python 3.9.0 or any newer version is installed on your system. You can check this by running python3 --version in your terminal or command prompt. If it’s not installed, you should install it from the official Python website [here](https://www.python.org/downloads).
2. Install Git:
* If you don't already have Git installed on your computer, you'll need to install it first. You can download Git from [here](https://git-scm.com/).
3. Open Your Terminal or Command Prompt: Navigate to the directory where you want to clone the repository (this example uses desktop as the directory, but feel free to change).
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

### Virtual Environment

_Creating a virtual environment is important for maintaining its own dependencies independent of other projects. This prevents conflicts between package versions that can lead to bugs and compatibility issues._

1. If Triton_Bot is on your desktop, use this command to navigate to the directory:
* Windows:
  ``` sh
  cd Desktop\Triton_Bot
  ```
* Mac or Linux:
  ``` sh
  cd ~/Desktop/Triton_Bot
  ```
2. Once you are inside the Triton_Bot directory, create the virtual environment using:
   ``` sh
   python3 -m venv env
   ```
* This command creates a new folder in the TritonBot directory called 'env' where the virtual environment files will be stored.
3. Activate the Virtual Environment:
* Windows:
  ``` sh
  env\Scripts\activate
  ```
* Mac or Linux:
  ``` sh
  source env/bin/activate
  ```
4. Install Requirements:
* With the virtual environment activated, install all the packages listed in the requirements.txt file by running:
  ``` sh
  pip install -r requirements.txt
  ```
5. Make sure the script is being run in your virtual environment. For example, in VS Code it should say 'Python 3.9.0 env' at the bottom of your screen, and in the VS Code command prompt you should see '(env)' before your username.


### OpenAI Key
1. If you have not already, create an OpenAI profile [here](https://platform.openai.com/).
2. On the left side of your screen, click on "API keys", then click "Create new secret key".
3. Copy the secret key (it should be a long strong of random letters and numbers) and store it in the .env.example file.
4. Rename ".env.example" to ".env".



<!-- USAGE EXAMPLES -->
## Usage





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

Wallace Wefel - [LinkedIn](https://www.linkedin.com/in/wallace-wefel-67a932104/) - wewefel@ucsd.edu




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
