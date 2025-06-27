const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000; // Dùng .env hoặc mặc định 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
