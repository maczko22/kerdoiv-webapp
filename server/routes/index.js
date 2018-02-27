const passport = require('passport');
const userService = require('../service/User/index');
const authMW = require('../middleware/authMW');

module.exports = app => {
    app.get('/questionnaires', authMW, (req, res) => {});

    app.post('/create-questionnaire', authMW, (req, res) => {
        console.log(req.user);
        const userId = req.user;
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.json({ msg: 'Sikeresen kijelentkezve.' });
    });

    app.get('/current-user', (req, res) => {
        res.send(req.user);
    });

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
