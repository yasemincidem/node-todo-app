const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const port = process.env.port || 3000;
mongoose.connect(config.getConnectionUri());
app.listen(port);