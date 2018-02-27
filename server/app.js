const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

require('./models/User');
require('./models/Questionnaire');
require('./service/passport');

//A port amelyen futni fog a backend.
const PORT = 8080;

mongoose.Promise = global.Promise;
//DB connection
mongoose.connect('mongodb://127.0.0.1:27017/', err => {
    if (err) {
        console.log(
            `Valami hiba törént a MongoDB szerver csatlakozása közben: ${err}`
        );
        return;
    }
    console.log(`
    ###--------------------------------------------------###
    # Szerver sikeresen csatlakozott a MongoDB szerverhez  #
    ###--------------------------------------------------###
    `);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ['tesa']
    })
);
app.use(cors());

//Route-ok beimportálása.
require('./routes/index')(app);

app.listen(PORT, () =>
    console.log(`
###----------------------------------###
#App elindult a <localhost:${PORT}>-on.#
###---------------------------------.###
`)
);
