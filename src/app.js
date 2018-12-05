import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import Html from './components/Html';

const server = express();

const port = 3000;

server.use(express.static(path.join(__dirname, "../public")));

server.use(bodyParser.urlencoded({
  extended: true
}));

server.get('/', (req, res) => {
  res.status(200).set({"Content-Type": "text/html"});

  let context = {};

  let template = ReactDOMServer.renderToString(<Html context={context} location={req.url} />);

  res.send(`<!DOCTYPE html>` + template);
});

server.post('/', (req, res) => {
  res.status(200).set({"Content-Type": "text/plain"});

  res.send('Stub said that: ' + req.body.phrase);
});

server.get('/somewhere', (req, res) => {
  res.status(200).set({"Content-Type": "text/html"});

  let context = {};

  let template = ReactDOMServer.renderToString(<Html context={context} location={req.url} />);

  res.send(`<!DOCTYPE html>` + template);
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));