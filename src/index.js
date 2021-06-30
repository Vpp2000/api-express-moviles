const express = require('express');
const app = express();
const router = require("./routes/index");

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(router);


app.listen(3000);
console.log('Server on port', 3000);