# AI Safety Incident Log Service (MERN Stack)

A RESTful API service to log and manage hypothetical AI safety incidents.

## Features

- Create, read, and delete AI safety incidents
- Track incident severity (Low, Medium, High)
- Automatic timestamping of reported incidents
- Responsive web interface

## Technologies

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React(vite), Material-UI
- **Database**: MongoDB

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   cd backend

### Install dependencies:


npm install

### Create a .env file in the backend directory with:

MONGODB_URI=mongodb://localhost:27017/ai_safety_incidents
PORT=5000

### (Optional) Seed the database with sample incidents:

node seed.js

### Start the backend server:
node server.js
Frontend Setup

### Navigate to the frontend directory:
cd ../frontend

### Install dependencies:
npm install

### Start the frontend development server:
npm run dev


### API Endpoints
GET /incidents - Retrieve all incidents

POST /incidents - Create a new incident

GET /incidents/:id - Retrieve a specific incident

DELETE /incidents/:id - Delete an incident


### Usage
Access the web interface at http://localhost:3000

View, create, or delete incidents through the UI

### Alternatively, interact directly with the API at http://localhost:5000/incidents


## Running the Application

1. Start MongoDB (make sure it's running locally or update the connection string)
### In one terminal:
   cd backend
   node server.js
### In another terminal:
cd frontend
npm run dev

### The application will be available at http://localhost:3000 with the API running on http://localhost:5000.



