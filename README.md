# User Registration Full-Stack Application

A full-stack user registration system built using **FastAPI**, **MySQL**, and **HTML/CSS/JavaScript**.

---

## Features

- ✅ Register new users (Name, Email, Date of Birth)
- 📝 Update user details
- 🗑 Delete users (with confirmation alert)
- 📋 View all registered users
- 🌈 Responsive & modern UI with smooth transitions

---

## Tech Stack

**Backend:** FastAPI, SQLAlchemy, MySQL  
**Frontend:** HTML, CSS, JavaScript  
**Database:** MySQL  
**Tools:** dotenv, Uvicorn

---

## 📁 Folder Structure

User_Registration_App/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── crud.py
│   ├── database.py
│   ├── config.py
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md ✅ ← Add it here (root folder)



---

## Backend Setup (FastAPI + MySQL)


# 1. Clone the Repository
```bash
git clone https://github.com/your-username/User_Registration_App.git
cd User_Registration_App/backend

# 2. Create & Activate Virtual Environment
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate

#3. Install Required Packages
pip install -r requirements.txt

#4. Create a MySQL Database
CREATE DATABASE user_db;


#5. Create .env File
#Inside the backend folder, create a .env file with your MySQL credentials:
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=user_db

#6. Run the Backend Server
uvicorn main:app --reload




💻 Frontend Setup (HTML/CSS/JS)

#1. Navigate to the frontend Folder
cd ../frontend


#2. Run the Frontend
python -m http.server

🔌 API Endpoints (CRUD)

Method	    Endpoint	    Description
GET	        /users	        Get all users
POST	    /register	    Register a new user
PUT	        /update/{id}	Update user by ID
DELETE	    /delete/{id}	Delete user by ID


Author :

Made with 💙 by [Mounesh U]
GitHub: github.com/MouneshU





