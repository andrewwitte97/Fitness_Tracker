const express = require('express');
const users = require('../models/Users');

const usersController = express.Router();


usersController.use((req, res, next) => {
    console.log('${req.method} Request Received');
    next();
});

// Get data for one user
usersController.get('/:username', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        res.send(user);
    } else {
        res.status(404).send();
    }
});

// Get profile
usersController.get('/:username/profile', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const profile = users[profile];
        res.send(profile);
    } else {
        res.status(404).send();
    }
});

// Get password
usersController.get('/:username/password', (req, res) => {
    const username = req.params.profile.password;
    const user = users[username];
    if (user) {
        const password = user.password;
        res.send(password);
    }
    else {
        res.status(404).send();
    }
});

// Get first name
usersController.get('/:username/firstname', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const firstname = user.firstname;
        res.send(firstname);
    }
    else {
        res.status(404).send();
    }
});

// Get lastname
usersController.get('/:username/lastname', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const lastname = user.lastname;
        res.send(lastname);
    }
    else {
        res.status(404).send();
    }
});

// Get gender
usersController.get('/:username/gender', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const gender = user.gender;
        res.send(gender);
    }
    else {
        res.status(404).send();
    }
});

// Get age
usersController.get('/:username/age', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const age = user.age;
        res.send(age);
    }
    else {
        res.status(404).send();
    }
});

// Get log
usersController.get('/:username/log', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const log = user.log;
        res.send(log);
    }
    else {
        res.status(404).send();
    }
});

// Get log entries for given date
usersController.get('/:username/log/:date', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const log = user.log;
        const date = new Date(req.params.date);
        const logLen = log.length;
        const matches = [];
        for (let i = 0; i < logLen; i++) {
            const entry = log[i];
            const thisDate = new Date(entry.date);
            if (thisDate.getTime() === date.getTime()) {
                matches.push(entry);
            }
        }
        if (matches && matches.length) {
            res.send(matches);
        } else {
            res.send("No entries for this date");
        }
    } else {
        res.status(404).send();
    }
});

// Create a new profile
usersController.post('/', (req, res) => {
    const newUser = req.query;
    const username = req.query.username;
    newUser.log = [];
    users[username] = newUser;
    console.log(newUser);
    if (newUser) {
        res.status(201).send(newUser);
    } else {
        res.status(404).send();
    }

});

// Add an entry to the exercize log
usersController.post('/!username/log', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const log = user.log;
        const date = new Date(req.query.date);
        const newEntry = req.query;
        newEntry.date = date;
        log.push(newEntry);
        if (newEntry) {
            res.status(201).send(newEntry);
        }
        else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

// Update password
usersController.put('/:username/password', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const newPassword = req.query.password;
        if (newPassword) {
            user.password = newPassword;
            users[username] = user;
            res.send(users[username].password);
        } else {
            res.status(404).send();
        }
        
    } else {
        res.status(404).send();
    }
});

// Update firstname
usersController.put('/:username/firstname', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const newFirstname = req.query.firstname;
        if (newFirstname) {
            user.firstname = newFirstname;
            users[username] = user;
            res.send(users[username].firstname);
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

// Update lastname
usersController.put('/:username/lastname', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const newLastname = req.query.lastname;
        if (newLastname) {
            user.lastname = newLastname;
            users[username] = user;
            res.send(users[username].lastname);
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

// Update gender
usersController.put('/:username/gender', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const newGender = req.query.gender;
        if (newGender) {
            user.gender = newGender;
            users[username] = user;
            res.send(users[username].gender);
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

// Update age
usersController.put('/:username/age', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const newAge = req.query.age;
        if (newAge) {
            user.age = newAge;
            users[username] = user;
            res.send(users[username].age);
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

// Delete entry from log
usersController.delete('/:username/log', (req, res) => {
    const username = req.params.username;
    const user = users[username];
    if (user) {
        const id = req.query.id;
        if (id) {
            const log = user.log;
            const entry = log[id];
            if (entry) {
                log.splice(id, 1);
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
});

module.exports = usersController;