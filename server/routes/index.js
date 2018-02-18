const registerService = require('../service/User/register');
module.exports = app => {
    app.get('/', (req, res) => {
        res.json({ hello: 'World' });
    });

    app.get('/kerdoiv-lista', (req, res) => {
        const fakeQL = require('../fakedb/kerdoiv-lista.json');

        res.json(fakeQL);
    });

    app.get('/kerdoivek', (req, res) => {
        const fakeQs = require('../fakedb/kerdoivek.json');

        res.json(fakeQs);
    });

    app.post('/register', (req, res) => {
        const { username, password } = req.body;
        const user = registerService.createUser({ username, password });

        user
            .save()
            .then(newUser => res.json(newUser))
            .catch(console.log);
    });

    app.post('/login', (req, res) => {
        const fakeLogin = require('../fakedb/login.json');
        const { username, password } = req.body.body;

        if (
            username === fakeLogin.username &&
            password === fakeLogin.password
        ) {
            res.status(200).json({ success: true, username, password });
        }
        res.status(200).json({ success: false, msg: 'Rossz jelszó!' });
    });
};
