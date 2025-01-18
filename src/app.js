import express from 'express'; // Express framework 
import dotenv from 'dotenv'; // for loading environmental variables
import authRoutes from './routes/authRoutes.js'; // auth routes import
import cors from "cors"; // middleware to handle cross origin resource sharing

// import userRoutes from './routes/userRoutes.js';

// dotenv setup to make environment variables accessible
dotenv.config();

const app = express(); // creating an express app

// Middleware to parse incoming JSON requests
app.use(express.json());

// CORS configuration
// Allow requests from specific origins (e.g., frontend running on localhost:3000)
// Support GET, POST, PUT, and DELETE methods
// Allow Content-Type and Authorization headers
// Enable credentials to allow cookies or HTTP authentication
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

// Authentication routes (e.g., login, signup, logout)
app.use('/auth', authRoutes);
// Basic route to verify server is running
app.get('/', (req,res) => {
    res.send("This is geo data app")
});

// app.use('/users', userRoutes);


export default app; // exporting the express app