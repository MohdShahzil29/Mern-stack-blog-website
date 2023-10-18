const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan');
const { connectDb } = require('./config/db');
const userRoutes = require('./routes/userRoutes')

// Dotenv config 
dotenv.config();

// Mongo Connect

connectDb()

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// routes

app.use('/api/v1/user', userRoutes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

