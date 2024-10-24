User Authentication and Information Management System: 

This project is a React application. It provides user authentication functionality, allowing users to register, log in, view their personal information, and update their details. The application utilizes MongoDB for data storage.

Features
User Registration: New users can create an account by providing their name, email, and password.
User Login: Registered users can log in to access their personal information.
User Information Page: After logging in, users can view their name and email.
Information Update: Users can update their personal information while logged in.
Navigation: A user-friendly navigation bar allows easy access to the home, login, registration, and user info pages.
Error Handling: Comprehensive error messages are displayed for registration and login failures.

Technologies Used

Frontend:

React: A JavaScript library for building user interfaces.
Axios: For making HTTP requests to the backend.
React Router: For handling navigation within the application.
Bootstrap: For styling the components and layout.

Backend:

Node.js: A JavaScript runtime for building scalable server-side applications.
Express: A web application framework for Node.js.
MongoDB: A NoSQL database for storing user information.
JWT (JSON Web Token): For securely handling user authentication.

Install the backend dependencies:

cd backend

npm install

Set up your environment variables by creating a .env file in the backend directory and add your jwt_secret:
JWT_SECRET=your_jwt_secret_key

Usage:

Navigate to the home page to see the application.
Use the navigation bar to register a new account or log in.
Once logged in, you will have access to your personal information and the option to update it.(refresh the page after login once)
