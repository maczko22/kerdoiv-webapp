const userService = require('../service/User/index');
module.exports = app => {
    app.get('/', (req, res) => {
        res.json({ hello: 'World' });
    });

    app.get('/questionnaires', (req, res) => {});

    app.get('/kerdoivek', (req, res) => {});

    app.post('/register', (req, res) => {
        const { username, password } = req.body;
        const user = userService.createUser({ username, password });

        user
            .save()
            .then(newUser => res.json(newUser))
            .catch(console.log);
    });

    app.post('/login', (req, res) => {
        const { username, password } = req.body.body;
        const user = userService.findByName(username);

        if (user && user.username === username && user.password === password) {
            res.status(200).json({ success: true, username, password });
        }

        res.status(200).json({ success: false, msg: 'Rossz jelszó!' });
    });
};
