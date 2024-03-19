const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ApiRoutes = require('./src/routes/index');
dotenv.config();
const PORT = process.env.VITE_APP_PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello World');
});

 app.use("/api", ApiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

