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

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) return res.redirect(redirectLocation.pathname);
    if (error) return next(error.message);
    if (renderProps == null) return next(error);

    let markup = renderToString(<RouterContext {...renderProps}/>);

		let html = [
      `<!DOCTYPE html>`,
      `<html>`,
        `<head>`,
          `<title>Tech Talks - Advanced Data Visualization With D3.js</title>`,
          `<meta charset="utf-8"/>`,
          `<style>html, body, #root { height: 100%; } a { text-decoration: none !important; }'
          @-webkit-keyframes change-color {
            0%   { background-color: #ff324d; }
            100% { background-color: white; }
          }
          @-moz-keyframes change-color {
            0%   { background-color: #ff324d; }
            100% { background-color: white; }
          }
          @-o-keyframes change-color {
            0%   { background-color: #ff324d; }
            100% { background-color: white; }
          }
          @keyframes change-color {
            0%   { background-color: #ff324d; }
            100% { background-color: white; }
          }

          .ticker-down {
            -webkit-animation: change-color 2s; /* Safari 4+ */
            -moz-animation:    change-color 2s; /* Fx 5+ */
            -o-animation:      change-color 2s; /* Opera 12+ */
            animation:         change-color 2s; /* IE 10+ */
          }

          @-webkit-keyframes change-color-up {
            0%   { background-color: #8cc800; }
            100% { background-color: white; }
          }
          @-moz-keyframes change-color-up {
            0%   { background-color: #8cc800; }
            100% { background-color: white; }
          }
          @-o-keyframes change-color-up {
            0%   { background-color: #8cc800; }
            100% { background-color: white; }
          }
          @keyframes change-color-up {
            0%   { background-color: #8cc800; }
            100% { background-color: white; }
          }

          .ticker-up {
            -webkit-animation: change-color-up 2s; /* Safari 4+ */
            -moz-animation:    change-color-up 2s; /* Fx 5+ */
            -o-animation:      change-color-up 2s; /* Opera 12+ */
            animation:         change-color-up 2s; /* IE 10+ */
          }

          @-webkit-keyframes left-to-right {
            0%   { margin-left: 100%; }
            100% { margin-left: -100%; }
          }
          @-moz-keyframes left-to-right {
            0%   { margin-left: 100%; }
            100% { margin-left: -100%; }
          }
          @-o-keyframes left-to-right {
            0%   { margin-left: 100%; }
            100% { margin-left: -100%; }
          }
          @keyframes left-to-right {
            0%   { margin-left: 100%; }
            100% { margin-left: -100%; }
          }


          .left-to-right {
            -webkit-animation: left-to-right 10s infinite; /* Safari 4+ */
            -moz-animation:    left-to-right 10s infinite; /* Fx 5+ */
            -o-animation:      left-to-right 10s infinite; /* Opera 12+ */
            animation:         left-to-right 10s infinite; /* IE 10+ */
          }

          .left-to-right span {
              white-space: nowrap;
          }
          </style>`,
        `</head>`,
        `<body>`,
          `<div id="root"><div>${markup}</div></div>`,
					`<script type="text/javascript" src="vendor.bundle.js" charset="utf-8"></script>`,
					`<script type="text/javascript" src="app.bundle.js" charset="utf-8"></script>`,
        `</body>`,
      `</html>`
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
server.listen(3333);
