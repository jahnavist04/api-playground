# ⚡ API Playground

A lightweight, browser-based REST API testing tool built with HTML, CSS, and JavaScript.

API Playground allows developers to send HTTP requests, inspect API responses, and experiment with REST APIs directly from their browser — without installing additional software.

## 🚀 Features

- **HTTP Methods:** Support for GET, POST, PUT, and DELETE.
- **Custom API URLs:** Send requests to different API endpoints.
- **JSON Request Body:** Submit JSON payloads with POST and PUT requests.
- **Response Viewer:** View API responses in a readable, formatted JSON structure.
- **HTTP Status Codes:** Display response status and status text.
- **Response Time:** Measure how long an API request takes.
- **Error Handling:** Handle invalid JSON, network errors, and failed requests.
- **Responsive Interface:** Simple interface that works across different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic |
| Fetch API | HTTP requests |
| GitHub Pages | Deployment and hosting |

## 📂 Project Structure

```text
api-playground/
│
├── index.html      # Main application structure
├── style.css       # Application styling
├── script.js       # API request functionality
└── README.md       # Project documentation
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/api-playground.git
```

### 2. Navigate to the project directory

```bash
cd api-playground
```

### 3. Run the application

Open `index.html` in your browser.

No additional dependencies or installations are required.

## 🧪 Example API

You can test the application using the free JSONPlaceholder API.

**GET Request**

```text
https://jsonplaceholder.typicode.com/posts/1
```

**POST Request**

```text
https://jsonplaceholder.typicode.com/posts
```

Example JSON payload:

```json
{
  "title": "API Playground",
  "body": "Testing my first REST API",
  "userId": 1
}
```

## 🔒 Security & Privacy

- Requests are sent directly from the user's browser.
- No user credentials or API responses are stored on a backend.
- Avoid entering sensitive credentials when testing untrusted endpoints.
- Cross-Origin Resource Sharing (CORS) restrictions may prevent requests to certain APIs.

## 🔮 Future Improvements

- [ ] Custom request headers
- [ ] Query parameter editor
- [ ] Request history
- [ ] JSON syntax highlighting
- [ ] Copy response functionality
- [ ] Response size display
- [ ] Save frequently used API requests

## 🎯 Project Objective

The goal of API Playground is to make REST API testing simple and accessible while providing hands-on experience with HTTP methods, asynchronous JavaScript, API integration, and response handling.

## 📜 License

This project is licensed under the MIT License.

---

**Built with ⚡ for developers who love experimenting with APIs.**
