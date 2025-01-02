const express = require('express');
const {emailController} = require('./emailController');
const router = express.Router();

router.post('/sendEmail', emailController);

module.exports = router;