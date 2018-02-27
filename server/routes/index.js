const passport = require('passport');
const userService = require('../service/User/index');
const authMW = require('../middleware/authMW');

module.exports = app => {
    app.get('/', authMW, (req, res) => {
        res.json({ hello: 'World' });
    });

    app.get('/questionnaires', authMW, (req, res) => {});

    app.get('/kerdoivek', authMW, (req, res) => {});

    app.post('/register', (req, res) => {
        const { username, password } = req.body;
        const user = userService.createUser({ username, password });

        user
            .save()
            .then(newUser => res.json(newUser))
            .catch(console.log);
    });

    app.post('/login', passport.authenticate('local'), (req, res) => {
        res.send(req.session);
    });
};
