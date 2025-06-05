# BookMyShow Clone

A full-stack web application clone of BookMyShow built with React and Node.js.

## Features

- User Authentication (Signup/Login)
- Movie Listings and Details
- Theater Listings
- Show Timings
- Seat Selection
- Booking System
- Payment Integration
- User Profile and Booking History

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Styling: Tailwind CSS

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install
   ```
3. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
bookmyshow-clone/
├── frontend/          # React frontend
├── backend/           # Node.js backend
├── package.json       # Project dependencies
└── README.md         # Project documentation
``` 