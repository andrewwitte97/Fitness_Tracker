const express = require('express');
const morgan = require('morgan');
const users = require('../models/Users');

const usersController = express.Router();
const profileRouter = require('./Profile.js');
const logRouter = require('./Log')


usersController.param('username', (req, res, next, username) => {
    const user = users[username];
    if (user) {
        req.user = user;
        req.username = username;
        next();
    } else {
        res.status(404).send();
    }
});

// Get all user data
usersController.get('/', (req, res) => {
    res.send(users)
});

usersController.get('/:username', (req, res) => {
    res.send(users[req.username]);
});

// Add a new user
usersController.post('/', (req, res) => {
    const newUser = req.query;
    const username = req.query.username;
    newUser.log = [];
    users[username] = newUser;
    if (newUser) {
        res.status(201).send(newUser);
    } else {
        res.status(404).send();
    }
});

usersController.use('/:username/profile', profileRouter);
usersController.use('/:username/log', logRouter);

module.exports = usersController;