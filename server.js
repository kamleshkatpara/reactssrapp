import express from "express";
import compression from "compression";
import helmet from "helmet";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import App from "./src/App";
import theme from "./src/theme";

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="/public/logo192.png" />
        <link rel="manifest" href="/public/manifest.json" />
        <title>My page</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();
  const context = {};

  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StaticRouter>
    )
  );

  const css = sheets.toString();

  if (context.status === 404) {
    res.status(404);
  }
  res.send(renderFullPage(html, css));
}

const app = express();

app.use(compression());

app.use(helmet());

app.use("/build", express.static("build"));

app.use("/public", express.static("public"));

app.use(handleRender);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
