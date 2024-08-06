# MERN Stack Application

## Overview
This repository contains a fullstack web application built using the MERN stack (MongoDB, Express, React, Node.js). The application provides the following functionalities:
1. User Sign-Up
2. User Creation of Merchant Profile
3. Adding Multiple Users to the Same Merchant Profile
4. Restricting Product Access by User Roles
5. Admin Verification of Merchants and Products

## Assumptions
- The backend server will run on port 5000.
- The frontend server will run on port 3000.
- JWT secret and MongoDB connection string will be provided in environment variables.
- Roles are predefined as `admin`, `product_manager`, `authorizer`, and `verifier`.

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
2. Install the required dependencies:
   npm install
3.Create a .env file in the backend directory and add your MongoDB connection string and JWT secret:
4.npm run dev

### Frontend Setup

1. Navigate to the frontend directory:
2. Install the required dependencies:
   npm install
3.npm start

