const express = require('express');
const users = require('../models/Users');

const app = express.Router();

// Get all user data
app.get('/', (req, res, next) => {
    if (users) {
        res.send(users);
    } else {
        res.status(404).send();
    }
});

module.exports = app;