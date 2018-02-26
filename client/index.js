const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mockData = require('./mock/index.js');
const PORT = 3000;

//react hot reload
if (process.env.NODE_ENV != 'production') {
    const config = require('./webpack.config.dev.js');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const compiler = webpack(config);
    app.use(
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath
        })
    );
    app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//todo: szétszedni a router logikát

/*
app.get('/create/kerdoiv-lista', (req, res) => {
    res.json(mockData);
});
*/

app.get('/kerdoiv/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Ez a kérdőív kell: ${id}`);
    res.json(mockData[0]);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Kliens szerver elindult a localhost:${PORT}-on.`);
});
