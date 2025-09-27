# 🚀 MERN Community Project - From Start to Deployment

> **🎓 Course**: _"MERN STACK Community: From Start to Deployment"_ on Inflearn  
> **💻 Environment**: VSCode, Node.js, MongoDB, Express, React, Git  
> **📌 Goal**: Build a full-stack community web application with authentication, CRUD features, and deployment experience.

---

## 📁 Project Structure
mern-community/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── hooks/
│ │ ├── utils/
│ │ └── App.js
│ └── public/
├── .env (ignored in Git)
├── package.json
└── README.md

---

## 📌 Chapters Covered

| Chapter | Topic             | Description                                              |
| ------- | ----------------- | -------------------------------------------------------- |
| 01      | Project Setup     | Node.js, Express, MongoDB, initial configuration         |
| 02      | Frontend Basics   | React, Router setup, state management with Redux         |
| 03      | Backend API       | Express routes, controllers, MongoDB CRUD                |
| 04      | Authentication    | JWT, Firebase integration, protected routes              |
| 05      | Posts Feature     | Create, Read, Update, Delete, image upload (S3)          |
| 06      | Comments Feature  | Add, edit, delete comments                               |
| 07      | Search & Filter   | Search by keyword, sorting, pagination                   |
| 08      | Deployment        | Env configs, Heroku/Cloud deployment, static file serve  |

---

## 🧑‍⚖️ License & Attribution

This repository is **strictly for personal learning purposes**.

- **All copyrights belong to** [Inflearn](https://www.inflearn.com/) and the original course instructor.  
- This project is **not intended for any commercial use.**  
- Course link: [MERN STACK Community: From Start to Deployment (Inflearn)](https://www.inflearn.com/course/%ED%92%80%EC%8A%A4%ED%83%9D-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-mern/dashboard)

---

## 📦 Getting Started

```bash
# Clone this repository
git clone https://github.com/albertshin5172/MERN_Community_Project.git
cd mern-community

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd frontend
npm install
npm start

Notes

All comments and code are written in English to maintain global readiness.

.env is ignored in Git for security reasons.

AWS S3 and Firebase require additional configuration before running.

Careful error handling and logs were crucial during deployment.

🧠 Learning Log
Date	Progress Summary
2025-09-10	Initialized MERN project, setup backend API
2025-09-15	Implemented user authentication with JWT & Firebase
2025-09-20	Added post CRUD and image upload (S3 integration)
2025-09-25	Completed comments feature and search/filter system
2025-09-26	Deployed project to Heroku with environment configs
🔗 GitHub

Repository: https://github.com/albertshin5172/MERN_Community_Project
