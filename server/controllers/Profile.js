const express = require('express');
const morgan = require('morgan');
const users = require('../models/users');

const profileRouter = express.Router();

profileRouter.use(express.json());
profileRouter.use(morgan('tiny'));

// Get profile
profileRouter.get('/', (req, res) => {
    res.send(req.user.profile);
});


// Get first name
profileRouter.get('/firstname', (req, res) => {
    res.send(req.user.profile.firstname)
});


// Update profile
profileRouter.post('/', (req, res) => {
    const user = req.user;
    const username = req.username;
    const profile = req.body.profile;
    if (profile) {
        user.profile = profile;
        users[username] = user;
        res.send(users[username].profile);
    } else {
        res.status(404).send();
    }
});

// Get lastname
profileRouter.get('/lastname', (req, res) => {
    res.send(req.user.lastname)
});

// Get gender
profileRouter.get('/gender', (req, res) => {
    res.send(req.user.profile.gender);
});

// Get age
profileRouter.get('/age', (req, res) => {
    res.send(req.user.age);
});

// Update password
profileRouter.post('/password', (req, res) => {
    const user = req.user;
    const username = req.username;
    const newPassword = req.query.password;
    if (newPassword) {
        user.profile.password = newPassword;
        users[username] = user;
        res.send(users[username].profile.password);
    } else {
        res.status(404).send();
    }
});

// Update firstname
profileRouter.post('/firstname', (req, res) => {
    const user = req.user;
    const username = user.profile.username;
    const newFirstname = req.query.firstname;
    if (newFirstname) {
        user.profile.firstname = newFirstname;
        users[username] = user;
        res.send(users[username].profile.firstname);
    } else {
        res.status(404).send();
    }
});

// Update lastname
profileRouter.post('/lastname', (req, res) => {
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
profileRouter.post('/gender', (req, res) => {
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