import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.get('/', (req,res) => {
    res.send("This is geo data app")
});

// app.use('/users', userRoutes);


export default app;