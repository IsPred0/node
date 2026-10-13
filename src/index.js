const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send(`API funcionado!!!`);
});
module.exports = app;
