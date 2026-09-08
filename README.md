# 🎬 TMDB API Movie App

A full-stack movie discovery application built with React, Node.js, and Express.js. The application uses the TMDB API to help users discover popular and top-rated movies, search for movies, view detailed information, and manage their favorite movies.

## 🚀 Live Demo

[View Live Demo](https://tmdb-movies-beige.vercel.app)

## ✨ Features

- 🔥 Browse popular movies
- ⭐ Explore top-rated movies
- 🔍 Search movies by title
- 🎬 View detailed movie information
- ❤️ Add and remove movies from Favorites
- 📱 Responsive design
- ⚡ Backend API for handling TMDB API requests

## 📸 Screenshots

<p align="center">
  <img src="screenshots/HomePage.png" width="500" alt="Home Page">
  <img src="screenshots/HomePage1.png" width="500" alt="Home Page">
</p>

<p align="center">
  <img src="screenshots/DetailPage.png" width="500" alt="Movie Details">
  <img src="screenshots/Favorites.png" width="500" alt="Favorites">
</p>

<p align="center">
  <img src="screenshots/SearchMovie.png" width="500" alt="Search Movies">
</p>

## 🛠 Tech Stack

### Frontend

- React
- JavaScript
- Vite
- Bootstrap
- React-Bootstrap
- React Router
- React Icons
- CSS

### Backend

- Node.js
- Express.js
- Axios
- CORS
- dotenv

### API

- TMDB API

### Tools & Deployment

- Git & GitHub
- Vercel
- Render

## 📁 Project Structure

```text
TMDBMovies/
├── backend/
├── public/
├── screenshots/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/urvijahir/TMDBMovies.git
cd TMDBMovies
```

2. Install frontend dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. Start the backend in a separate terminal:

```bash
cd backend
npm install
npm start
```

The frontend will run at the local URL shown in your terminal.

### Environment Variables

Create a `.env` file inside the `backend` folder and add your TMDB API key:

```env
TMDB_API_KEY=your_tmdb_api_key
```

> Keep your API key private and do not commit the `.env` file to GitHub.

## 🌐 Deployment

- **Frontend:** Vercel
- **Backend:** Render

## 🔮 Future Improvements

- 🔐 Add user authentication
- 💾 Persist favorite movies with a database
- 🔑 Add forgot password and password reset functionality
- 🎞️ Add movie trailers
- 🔍 Add advanced movie filtering and sorting

## 👩‍💻 Author

**Urvi Ahir**

Front-End Developer

[GitHub](https://github.com/urvijahir)
