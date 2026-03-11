# Busify – Bus Ticket Booking System

## Overview

**Busify** is a full-stack web application designed to simplify and modernize the process of booking bus tickets online. The system allows passengers to search for buses, check seat availability, select seats, and complete bookings through an intuitive and user-friendly interface.

The application is built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and follows a **client–server architecture**. The frontend communicates with backend REST APIs to perform operations such as user authentication, bus search, seat booking, and booking history management.

The goal of this project is to provide a **seamless and efficient online bus reservation system** while demonstrating practical implementation of **full-stack web development concepts**.

---

# Features

### User Features

* User registration and secure login
* Search buses by source, destination, and travel date
* View available buses with schedules and seat availability
* Select preferred seats
* Enter passenger details and confirm booking
* Download ticket invoice after booking
* View booking history
* Cancel booked tickets (based on conditions)

### Admin Features

* Manage buses and schedules
* Update routes and timing details
* Monitor booking information
* Modify fares and seat availability

---

# Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* REST API architecture

### Database

* MongoDB
* MongoDB Atlas (cloud database)

### Deployment

* Frontend: **Vercel**
* Backend: **Render**
* Database: **MongoDB Atlas**

### Version Control

* Git
* GitHub

---

# System Architecture

The system follows a **MERN stack architecture**:

User → React Frontend → Node.js/Express API → MongoDB Database

* The **React frontend** handles the user interface and interactions.
* The **Node.js + Express backend** processes API requests and application logic.
* **MongoDB** stores user accounts, bus schedules, bookings, and payment details.

---

# Main Modules

* **User Authentication Module**

  * Handles registration, login, and session management.

* **Bus Search Module**

  * Allows users to search buses based on travel details.

* **Seat Selection Module**

  * Displays available seats and prevents duplicate bookings.

* **Booking Management Module**

  * Stores booking information and generates tickets.

* **Admin Management Module**

  * Allows administrators to manage buses, routes, and schedules.

---

# Project Structure

```
busbooking-app/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── utils/
│   └── App.js
│
├── public/
├── package.json
```

```
backend/
│
├── models/
├── routes/
├── server.js
├── seedBuses.js
└── package.json
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/bus-ticket-booking-system.git
```

Go to the project folder

```bash
cd bus-ticket-booking-system
```

Install dependencies

Frontend

```bash
cd busbooking-app
npm install
npm start
```

Backend

```bash
cd backend
npm install
node server.js
```

---

# Live Demo

Add your deployed web application link here:

```
Live Website: https://busify-deployment.vercel.app/
```

---

# Testing

The system was tested using multiple testing strategies:

* Unit Testing
* Integration Testing
* System Testing
* Performance Testing

These tests ensured proper functionality of modules such as authentication, seat booking, and ticket generation.

---

# Author

**Sivalakshmi PS**
BCA – Rajagiri College of Social Sciences
Full Stack Web Development (MERN)
