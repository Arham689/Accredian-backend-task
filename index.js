const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();


app.use(cors( {
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    // connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});



connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});
module.exports = connection;
const mainRoutes = require('./scr/routs/mainrout');

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
