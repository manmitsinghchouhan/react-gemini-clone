# Gemini AI Clone 🤖

A responsive, web-based clone of the Google Gemini conversational AI, built with React and Vite. This application provides a clean user interface to interact with the powerful Google Gemini API in real-time.

---
### Key Features ✨

* **Real-time Interaction:** Get instant, streamed responses from the Gemini API.
* **Markdown Rendering:** Safely renders the AI's Markdown responses into formatted HTML, including headings, bold text, and lists.
* **Chat History:** The sidebar displays a list of previous prompts for the current session.
* **Collapsible Sidebar:** A fully functional sidebar that can be expanded or collapsed for a better user experience.
* **Responsive Design:** A clean and modern UI that works seamlessly on both desktop and mobile devices.

---
### Tech Stack & Key Concepts

* **Front-End:** React, Vite, CSS3
* **API:** Google Generative AI SDK (`@google/generative-ai`)

This project also demonstrates a strong understanding of key React concepts:
* **Global State Management:** Using the **Context API** to manage application-wide state.
* **Asynchronous Operations:** Using **`async/await`** to handle API calls without freezing the UI.
* **Component-Based Architecture:** Building the UI from reusable, isolated components.
* **Security:** Using **environment variables** (`.env`) to protect the API key.

---
### Local Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up your environment variables:**
    * Create a file named `.env.local` in the root of the project.
    * Add your Gemini API key to this file:
        ```
        VITE_GEMINI_API_KEY="YOUR_API_KEY_HERE"
        ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```