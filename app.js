const express = require("express");
const helmet = require("helmet");
const expressLogging = require('express-logging');
const logger = require("logops");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(helmet());

app.use(expressLogging(logger));

app.get("/hello", (req, res) => {
    return res.status(200).json({
        message: "hello world"
    })
});

app.listen(PORT, () => {
    console.log(`application started and listening on PORT ${PORT}`);
});