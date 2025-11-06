🍳 RecipeHub - AI-Powered Recipe Generator

RecipeHub is a full-stack web application that generates personalized recipes using Google Gemini AI based on user-provided ingredients, cuisines, and dietary preferences.

🏃‍♂️ Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/yourusername/RecipeHub.git
cd RecipeHub

2️⃣ Start the Backend Server:
cd backend

npm install
npm run dev


Server runs on: http://localhost:8000

3️⃣ Start the Frontend:
cd ../frontend

npm install
npm run dev


Frontend runs on: http://localhost:5173

⚙️ Environment Variables

Create a .env file in the backend/ directory with:

PORT=8000
MONGODB_URI=your_mongodb_atlas_connection_string
GEMINI_API_KEY=your_google_generative_ai_key
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

🧠 Project Features

🤖 AI Recipe Generation – Uses Google Gemini LLM to generate recipes dynamically.

✏️ Recipe Modification – Modify existing recipes using natural prompts (e.g., “make it spicier”).

💾 Save, Delete & Rate Recipes – Fully managed recipe storage using MongoDB Atlas.

🔍 Search & Filter Recipes – Find recipes based on cuisine, difficulty, or diet.

🧑‍🍳 Interactive UI – Built with React and Bootstrap for a modern cooking assistant feel.

🔒 Secure API Design – RESTful structure with validation, error handling, and rate limiting.

📱 Responsive Design – Optimized for mobile, tablet, and desktop devices.

🛠️ Technology Stack
🌐 Frontend

React.js – Component-based frontend framework

React Router – Client-side routing

React Bootstrap – Responsive UI components

Axios – API communication

Vite – Lightning-fast frontend tooling

⚙️ Backend

Node.js – JavaScript runtime environment

Express.js – Web framework for building REST APIs

MongoDB Atlas – Cloud-based NoSQL database

Mongoose – Object modeling for MongoDB

Google Generative AI (Gemini) – Recipe generation and refinement

JWT (JSON Web Token) – Authentication & security

Helmet, CORS, Morgan, Compression – API protection and performance

📋 Requirements

Before running the project, ensure you have:

Node.js (v18 or higher)

npm (v9 or higher)

MongoDB Atlas account and connection string

Google Generative AI API key
