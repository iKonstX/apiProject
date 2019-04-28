const bodyParser = require("body-parser");

module.exports = (app) => {

    app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));
    app.use(function (req, res, next) {
        res.header('Content-Type', 'application/json');
        next();
    });

    return {
        port: 3000
    }
}