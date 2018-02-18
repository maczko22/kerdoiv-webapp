const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//A port amelyen futni fog a backend.
const PORT = 8080;

//DB connection
mongoose.connect('mongodb://127.0.0.1:27017', err => {
    if (err)
        console.log(
            `Valami hiba törént a MongoDB szerver csatlakozása közben: ${err}`
        );
    console.log(`
    ###--------------------------------------------------###
    # Szerver sikeresen csatlakozott a MongoDB szerverhez  #
    ###--------------------------------------------------###
    `);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

require('./models/User');

//Route-ok beimportálása.
require('./routes/index')(app);

app.listen(PORT, () =>
    console.log(`
###----------------------------------###
#App elindult a <localhost:${PORT}>-on.#
###---------------------------------.###
`)
);
