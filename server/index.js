const express = require('express');
const path = require('path');
const userController = require('./controllers/users');
const admin = require('firebase-admin')

const app = express();
const firebaseApp = admin.initializeApp();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });


app.get ('/', (req, res) => res.send("Hello"));

app.get('/port', (req, res,) => res.send("Using port: " + PORT));

app.use ('/users', userController );

app.listen(PORT, () => console.log(`Running on on http://.localhost:${PORT}`));
