const express = require('express');
const path = require('path');
const userController = require('./controllers/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.get ('/port', (req, res) => res.send("Using port: " + PORT));

app.get ('/', (req, res) => res.send("Hello"));

app.use ('/users', userController );

app.listen(PORT, () => console.log(`Running on on http://.localhost:${PORT}`));

