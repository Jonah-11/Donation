const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const bodyParser = require('body-parser'); // If needed

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Handle form data


//Enable CORS
app.use(cors()); //Allow all origins

// Routes
app.use('/api/auth', authRoutes);

//Handle incorrect routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
