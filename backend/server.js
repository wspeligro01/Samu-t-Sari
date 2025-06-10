import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Connection error:', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log("Server up and running on PORT:", PORT));
