const passport = require('passport');
const userService = require('../service/User/index');
const questionnaireService = require('../service/Questionnaire/index');
const subjectService = require('../service/Subject/index');
const authMW = require('../middleware/authMW');

module.exports = app => {
    app.get('/api/subjects', authMW, async (req, res) => {
        let subjects = await subjectService.findAll();

        res.send(subjects);
    });

    app.post('/api/create-subject', async (req, res) => {
        const subject = await subjectService.createSubject({
            name: req.body.subjectName,
            displayName: req.body.displayName
        });

        if (subject) {
            const newSubject = await subject.save();
            res.json(newSubject);
        }
        res.status(303).json({ message: 'Nem sikerült új témát hozzáadni!' });
    });

    app.get('/api/questionnaires', authMW, async (req, res) => {
        const questionnaires = await questionnaireService.findAllByUserId(
            req.user._id
        );
        console.log('questionnaires:', questionnaires);

        res.json({ questionnaires });
    });

    app.post('/api/create-questionnaire', authMW, (req, res) => {
        console.log(req.user);
        const userId = req.user;
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current-user', (req, res) => {
        console.log('user', req.user._id);
        res.send(req.user._id);
    });

    app.post('/api/register', (req, res) => {
        const { username, password } = req.body;
        const user = userService.createUser({ username, password });

        user
            .save()
            .then(newUser => res.json(newUser))
            .catch(console.log);
    });

    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        res.send(req.session);
    });
};
