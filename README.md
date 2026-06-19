# Sangati

> Connect. Share. Collaborate.

Sangati is a full-stack social networking platform designed to connect like-minded people through meaningful interactions. Users can share blogs, communicate through real-time messaging, participate in audio and video calls, follow other users, and discover new connections through personalized recommendations.

Built using the MERN Stack, Socket.io, and WebRTC, Sangati focuses on real-time communication, scalability, and a seamless user experience.

<img width="1862" height="955" alt="image" src="https://github.com/user-attachments/assets/ab005ae8-12b9-4f86-9c49-ac6253b01361" />

Built using the MERN Stack, Socket.io, and WebRTC, Sangati focuses on real-time communication, scalability, and a seamless user experience.

---

## 📦 Project Repositories

This project is maintained as two separate repositories.

### Frontend Repository
https://github.com/Prashant-Malviya/Sangati

### Backend Repository
https://github.com/Prashant-Malviya/Sangati-Backend


---

## 🚀 Features

### 👤 Authentication & Authorization

* Secure user registration and login
* JWT-based authentication
* Protected routes and middleware
* Role-based authorization

### 📝 Blogging Platform

* Create, edit, and delete blogs
* Rich content sharing
* View blogs from followed users
* Personalized content feed

### 💬 Real-Time Chat

* One-to-one messaging
* Real-time communication using Socket.io
* Instant message delivery
* Online/offline user status

### 📞 Audio Calling

* Peer-to-peer audio communication
* Real-time signaling using WebSockets
* Built using WebRTC fundamentals

### 🎥 Video Calling

* One-to-one video calling
* WebRTC-powered media streaming
* Real-time call setup and management

### 🤝 Social Networking

* Follow and unfollow users
* Discover like-minded people
* User profile management
* Personalized suggestions based on network connections

### 📚 API Documentation

* Interactive API documentation using Swagger UI
* Easy testing and exploration of endpoints

---

## 🏗️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Real-Time Communication

* Socket.io
* WebRTC

### Authentication

* JWT (JSON Web Tokens)
* Bcrypt.js

### Documentation

* Swagger UI

---

## 📂 Project Structure

```text
Sangati/
│
├── client/                 # React Frontend
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   └── config/
│
├── docs/                   # API Documentation
│
└── README.md
```

## 🔄 Application Flow

```text
Frontend (React)
        │
        ▼
REST APIs (Express)
        │
        ▼
MongoDB Database

Real-Time Features
        │
        ▼
Socket.io + WebRTC
```

## ⚡ Key Highlights

* Full-Stack MERN Application
* Real-Time Messaging System
* Audio Calling using WebRTC
* Video Calling using WebRTC
* Secure JWT Authentication
* Role-Based Authorization
* Swagger API Documentation
* Scalable Backend Architecture
* Responsive User Interface

---

## 🛠️ Installation

### Clone Repository

```bash
git clone https://github.com/Prashant-Malviya/Sangati.git
```

### Navigate to Project

```bash
cd Sangati
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:3000
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm start
```

---

## 📖 API Documentation

Swagger UI documentation is available after running the server.

```text
http://localhost:5000/api-docs
```

---

## 🔮 Future Enhancements

* Group Chat
* Group Video Calling
* Notifications System
* Post Likes & Comments
* Media Sharing
* AI-Powered User Recommendations
* Community Creation
* Mobile Application Support

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📧 Contact

### Prashant Malviya

* GitHub: https://github.com/Prashant-Malviya
* LinkedIn: https://linkedin.com/in/prashantmalviya

---

⭐ If you found this project useful, consider giving it a star.
