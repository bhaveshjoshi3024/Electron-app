# 📦 Electron Desktop App — Media Form + Viewer

This is a full-stack **Electron.js desktop app** built using **Node.js, Express, and MongoDB** that lets users:

- Submit their name, age, city, date, time, address
- Upload multiple images and one short video via drag & drop
- View entries by filtering city and date on a separate page

---

## 🚀 Features

- 🔹 Electron.js-based desktop UI
- 🔹 Node.js + Express backend API
- 🔹 MongoDB database for data storage
- 🔹 Multer for uploading images/videos
- 🔹 Filters data using query (city + date)
- 🔹 Fully local, self-contained system

---

## 🧰 Tech Stack

- **Frontend**: Electron.js (with HTML, CSS, JavaScript)
- **Backend**: Node.js + Express
- **Database**: MongoDB (local instance)
- **File Upload**: Multer

---

## 🗂️ Folder Structure

electron-mongo-app/
│
├── backend/
│ ├── server.js
│ ├── routes/userRoutes.js
│ ├── models/User.js
│ └── uploads/
│ ├── images/
│ └── videos/
│
├── frontend/
│ ├── main.js # Electron entry
│ ├── index.html # Page 1: Form
│ ├── view.html # Page 2: Data Viewer
│ ├── renderer.js # Handles form & view logic
│
├── package.json


## 🛠️ How to Run

### 🔧 Step 1: Install Dependencies
npm install
Step 2: Run Backend
cd backend
node server.js
Make sure MongoDB is running locally at mongodb://127.0.0.1:27017.
💻 Step 3: Launch Electron App
cd frontend
npx electron main.js

📦 Dependencies
electron
express
mongoose
multer
cors

🧑‍💻 Author
Bhavesh Joshi
