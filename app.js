import express from "express"
import { createServer } from "http"
import path from "path"

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const config = require('./webpack.config');
const compiler = webpack(config);

import React from 'react';
import {renderToString} from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import {RouterContext, match} from 'react-router';
import routes from './routes/routes';
import { API_URL, SIGNALR_URL } from './constants'
let app = express();

app.use((req, res, next) => {
  let location = createLocation(req.originalUrl);
  const css = new Set();
  const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())) }

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) return res.redirect(redirectLocation.pathname);
    if (error) return next(error.message);
    if (renderProps == null) return next(error);

    let markup = renderToString(<RouterContext { ...renderProps }/>);

		let html = [
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Tech Talks - Advanced Data Visualization With D3.js</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
          <meta name="apple-mobile-web-app-capable" content="yes">

          <link rel="stylesheet" href="http://facebook.github.io/react/css/syntax.css">
          <link rel="stylesheet" href="http://facebook.github.io/react/css/codemirror.css">
          <link rel="stylesheet" href="http://facebook.github.io/react/css/react.css">

          <style type="text/css">${[...css].join('')}</style>
          <style>
            html, body, #root { height: 100%; } a { text-decoration: none !important; }
            .a-canvas { width: 100% !important;height: 100% }
            .playgroundCode {
              width: initial;
              max-width: initial;
              display: flex;
              flex: 1;
            }
            .playground {
              display: flex;
              flex: 1;
            }
            .playgroundPreview {
              display: flex;
              flex: 1;
              width: initial;
            }
            .playgroundPreview div {
              display: flex;
              flex: 1;
            }
            .playgroundStage {
              flex: 1;
            }
            .CodeMirror {
              height: 80vh;
            }
            p.big.imeanit.really {
              font-size: 40px;
            }

            p[not-so=big].big.imeanit.really {
              font-size: 32px;
            }
          </style>
        </head>
        <body class="loading">
          <div id="root"><div>${markup}</div></div>
          <script type="text/javascript" src="/aframe.js" charset="utf-8"></script>
          <script type="text/javascript" src="/babel.js" charset="utf-8"></script>
          <script type="text/javascript" src="/polyfill.js" charset="utf-8"></script>
					<script type="text/javascript" src="/vendor.bundle.js" charset="utf-8"></script>
					<script type="text/javascript" src="/app.bundle.js" charset="utf-8"></script>
        </body>
      </html>`
    ].join('');
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
});

app.use(webpackDevMiddleware(compiler,{
  stats: {
      colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));
let server  = createServer(app);
server.listen(8081);
