const express = require('express');
const app = express();
const tareasRoutes = require('./routes/tareasRoutes');

app.use(express.json());
app.use('/', tareasRoutes);

module.exports = app;
