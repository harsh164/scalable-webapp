This project is part of the Frontend Developer Intern Assignment.
It demonstrates building a scalable full-stack web application with authentication, protected dashboard, CRUD operations, and clean UI/UX using React, Node.js, and MongoDB Atlas.

🧠 Features Implemented
🖥️ Frontend (React + TailwindCSS)

Built with React.js (CRA) and styled using TailwindCSS

Responsive design (mobile-first)

JWT authentication flow

Register / Login / Logout

Protected routes (Dashboard)

Dashboard features:

Display user profile (from backend)

Edit profile with name + bio

Full CRUD operations on Notes

Search & filter UI

Logout flow

API integrated via Axios with centralized error handling

⚙️ Backend (Node.js + Express + MongoDB)

RESTful API with modular structure

JWT-based authentication middleware

Password hashing using bcryptjs

CRUD endpoints for Notes (sample entity)

Profile update endpoint for bio editing

Database hosted on MongoDB Atlas

Environment variables managed via dotenv

🛡️ Security

Passwords hashed before storage

JWT signed with secret key (JWT_SECRET)

Protected routes via middleware

CORS configured for secure API access

🧱 Tech Stack
Layer	Technologies
Frontend	React.js, TailwindCSS, Axios, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas
Auth	JWT, bcryptjs
Dev Tools	Nodemon, dotenv, Postman
⚡ Getting Started
🧩 Prerequisites

Make sure you have installed:

Node.js ≥ 16

npm ≥ 8

Git

📦 1. Clone the repository
git clone https://github.com/your-username/scalable-webapp.git
cd scalable-webapp

⚙️ 2. Setup Backend
cd backend
npm install


Create a .env file in the backend/ folder:

PORT=4000
MONGO_URI=mongodb+srv://harshgupta1:1%40Jyotigupta@cluster0.miote30.mongodb.net/scalable_auth_db?retryWrites=true&w=majority
JWT_SECRET=abc123def456
JWT_EXPIRES_IN=7d



Then run:

npm run dev


✅ Server runs at http://localhost:4000

💻 3. Setup Frontend
cd ../frontend
npm install
npm start


✅ App runs at http://localhost:3000

🔐 4. Test Auth Flow

Visit /register → Create new account

Visit /login → Sign in

Redirects to /dashboard

View / Edit profile

Add / Search / Delete notes

Logout returns to /login

🧪 API Endpoints Summary
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/profile	Get user profile
PUT	/api/profile	Update profile (name, bio)
GET	/api/items	Get user notes
POST	/api/items	Create new note
DELETE	/api/items/:id	Delete note

Use Postman or the provided collection (postman_collection.json) to test.

🧰 Folder Structure
scalable-webapp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   └── components/
│   │       └── Navbar.js
│   └── tailwind.config.js
│
├── gitlog.txt
└── README.md

🌍 Deployment Notes

If deployed in production:

Frontend: Host on Vercel
 or Netlify

Backend: Deploy on Render
 or Railway.app

Use .env.production for production environment

Add HTTPS, domain configuration, and CI/CD pipeline (optional)

📈 Scalability Notes

Frontend:

Modular structure for routes, API hooks, components

Easy to migrate to Next.js for SSR

Centralized Axios instance for token refresh

Backend:

MVC architecture

Ready for microservices (can split into auth + CRUD)

JWT expiration & refresh logic can scale easily

Database:

Indexed user-based queries

MongoDB Atlas auto-scaling cluster
