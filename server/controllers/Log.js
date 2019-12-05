const express = require('express');
const morgan = require('morgan');
const users = require('../models/users');

const logRouter = express.Router({mergeParams: true});

logRouter.use(express.json());
logRouter.use(morgan('tiny'));

// Get log
logRouter.get('/', (req, res) => {
    res.send(req.user.log);
});

// Get log entries for given date
logRouter.get('/:date', (req, res) => {
    const log = req.user.log;
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
});

// Add an entry to the exercize log
logRouter.post('/', (req, res) => {
    const user = req.user;
    const username = req.username;
    const log = req.body.log;
    if (log) {
        user.log = log;
        users[username] = user;
        res.send(users[username].log);
    } else {
        res.status(404).send();
    }
});


// Delete entry from log
logRouter.delete('/', (req, res) => {
    const user = req.user;
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
});

module.exports = logRouter;