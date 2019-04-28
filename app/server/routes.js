const db = require('../db')()
const uniqid = require('uniqid');

module.exports = (app) => {
    // Create User
    app.post('/Users', (req, res) => {
        req.body.session = uniqid();
        db.users.create(req.body)
            .then((response) => {
                if (response.length != 0) {
                    res.statusCode = 200;
                    res.send(JSON.stringify(response))
                }
                else {
                    res.statusCode = 400;
                    res.send()
                }
            })
            .catch((error) => {
                res.statusCode = 500;
                res.send(error)
            });
    })
    //Get User
    app.get('/Users', (req, res) => {
        db.users.list(req.body)
            .then((response) => {
                if (response.length != 0) {
                    res.send(JSON.stringify(response))
                }
                else {
                    res.statusCode = 400;
                    res.send()
                }
            })
            .catch((error) => {
                res.statusCode = 400;
                res.send(error)
            })
    })
    //Update User
    app.patch('/Users', (req, res) => {
        db.users.update(req.body.selector, req.body.data)
            .then((response) => {
                if (response.length != 0) {
                    res.send(JSON.stringify(response))
                }
                else {
                    res.statusCode = 400;
                    res.send()
                }
            })
            .catch((error) => {
                res.statusCode = 400;
                res.send(error)
            })
    })
    // Delete User
    app.delete('/Users', (req, res) => {
        db.users.delete(req.body)
            .then((response) => {
                if (response.length != 0) {
                    res.send(JSON.stringify(response))
                }
                else {
                    res.statusCode = 400;
                    res.send()
                }
            })
            .catch((error) => {
                res.statusCode = 400;
                res.send(error)
            })
    })

    app.post('/Users/auth', (req, res) => {
        db.users.auth(req.body)
            .then((response) => {
                if (response.length != 0) {
                    res.statusCode = 200;
                    console.log(response)
                    res.send(response)
                }
                else {
                    res.statusCode = 403;
                    res.send()
                }
            })
            .catch((error) => {
                res.statusCode = 403;
                res.send(error)
            })
    })

    //Create Post
    app.post('/posts/', (req, res) => {
        console.log(req.body)
        db.posts.create(req.body)
            .then((response) => {
                if (response.rowCount != 0) {
                    console.log(response)
                    res.statusCode = 200;
                    res.send(response)
                }
                else {
                    console.log(response)
                    res.statusCode = 403;
                    res.send()
                }
            })
            .catch((error) => {
                console.log(error)
                res.statusCode = 403;
                res.send(error)
            })
    })

    return app;
}