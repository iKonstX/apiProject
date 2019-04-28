const express = require('express')
const app = express();

const loadRoutes = require('./routes')
const loadConfig = require('./config')

module.exports = {
    createServer: () => {
        config = loadConfig(app);
        loadRoutes(app);

        return app.listen(config.port, () => {
            console.log("Running on Port: ", config.port)
        });
    }
}
