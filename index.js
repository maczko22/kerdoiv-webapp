const express = require("express");
const app = express();
const path = require("path");

//react hot reload
if (process.env.NODE_ENV != "production") {
  const config = require("./webpack.config.dev.js");
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on :" + (process.env.PORT || 3000));
});
