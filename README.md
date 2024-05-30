# Netflix Clone MERN Stack Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a Netflix clone web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a user-friendly interface for clients to view movies and playlists, as well as an admin interface to manage users, movies, and playlists. This application demonstrates the use of modern web development technologies to create a functional and interactive web platform.

## Features

### Client Interface
- **Navbar**: Provides easy navigation throughout the app.
- **Featured Movie**: Displays a highlighted movie on the homepage.
- **Playlists**: Users can browse through different playlists of movies.

### Admin Interface
- **User Management**: View and manage registered users, including creating, updating, and deleting users.
- **Movie Management**: Add, update, and delete movies.
- **Playlist Management**: Create, update, and delete playlists.
- **Statistics**: View graphical representations of user data.

## Technologies Used

- **Frontend**: React, Html,CSS,Javascript, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Charting**: Chart.js

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies for the server**
   ```sh
   cd server
   npm install
   ```

3. **Install dependencies for the client**
   ```sh
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create a `.env` file in the `server` directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. **Run the server**
   ```sh
   cd server
   npm start
   ```

6. **Run the client**
   ```sh
   cd ../client
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` to view the client interface.
- Navigate to `http://localhost:3000/admin` to access the admin interface.

## Screenshots

### Client Interface
![Client Interface](screenshots/client.png)

### Admin Interface
![Admin Interface](screenshots/admin.png)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [Vishal Kalwani](mailto:vishalkalwani623@gmail.com

Project Link: [https://github.com/yourusername/netflix-clone](https://github.com/yourusername/netflix-clone)
