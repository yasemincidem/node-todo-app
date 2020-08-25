const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const app = express();

const port = process.env.port || 3000;
mongoose.connect(config.getConnectionUri());
setupController(app);
apiController(app);
app.listen(port);