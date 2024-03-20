const express = require('express');
const app = express();
require('./src/models/index');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ApiRoutes = require('./src/routes/index');
const morgan = require('morgan');
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 3005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});

 app.use("/api", ApiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

