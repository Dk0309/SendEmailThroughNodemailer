const express = require('express');
const email = require('./emailroute');
const app = express();

app.get('/', (req,res) => {
    res.send("<h1>sending email from node using nodemailer</h1>");
})

app.use(express.json());
app.use("", email);

app.listen(5000, () => {
    console.log("Server is Running on PORT 5000");
})