const express = require('express');
const morgan = require('morgan');
const users = require('../models/Users');

const profileRouter = express.Router();

profileRouter.use(morgan('tiny'));

// Get profile
profileRouter.get('/', (req, res) => {
    res.send(req.user.profile);
});

// Get password
profileRouter.get('/password', (req, res) => {
    res.send(req.user.password);
});

// Get first name
profileRouter.get('/firstname', (req, res) => {
    res.send(req.user.firstname)
});

// Get lastname
profileRouter.get('/lastname', (req, res) => {
    res.send(req.user.lastname)
});

// Get gender
profileRouter.get('/gender', (req, res) => {
    res.send(req.user.gender);
});

// Get age
profileRouter.get('/age', (req, res) => {
    res.send(req.user.age);
});

// Update password
profileRouter.put('/password', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newPassword = req.query.password;
    if (newPassword) {
        user.password = newPassword;
        users[username] = user;
        res.send(users[username].password);
    } else {
        res.status(404).send();
    }
});

// Update firstname
profileRouter.put('/firstname', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newFirstname = req.query.firstname;
    if (newFirstname) {
        user.firstname = newFirstname;
        users[username] = user;
        res.send(users[username].firstname);
    } else {
        res.status(404).send();
    }
});

// Update lastname
profileRouter.put('/lastname', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newLastname = req.query.lastname;
    if (newLastname) {
        user.lastname = newLastname;
        users[username] = user;
        res.send(users[username].lastname);
    } else {
        res.status(404).send();
    }
});

// Update gender
profileRouter.put('/gender', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newGender = req.query.gender;
    if (newGender) {
        user.gender = newGender;
        users[username] = user;
        res.send(users[username].gender);
    } else {
        res.status(404).send();
    }
});

// Update age
profileRouter.put('/age', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newAge = req.query.age;
    if (newAge) {
        user.age = newAge;
        users[username] = user;
        res.send(users[username].age);
    } else {
        res.status(404).send();
    }
});

module.exports = profileRouter; 