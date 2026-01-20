//import http from 'node:http'
//import fs from 'node:fs'
//
//const paths = [
//  'index.html', 'about.html', 'contact-me.html', '404.html'
//]
//
//const server = http.createServer((req, res) => {
//  if (req.url == '/') {
//    req.url = '/index'
//  } else if (paths.includes(req.url.slice('.')[0])) {
//    req.url = req.url + '.html';
//  }
//
//  fs.readFile('./src' + req.url + '.html', {encoding: 'utf8'}, (err, data) => {
//    if (err) {
//      return err;
//    }
//
//    res.write(data);
//    res.end();
//  })
//})
//
//server.listen(8080, () => {
//  console.log("--- Server listening on port 8080 ---")
//});


import {loadEnvFile} from 'node:process';
import express from 'express';
const app = express();
loadEnvFile('./.env');

const paths = [
  "/about", "/contact"
];

app.get('/', (req, res) => res.sendFile(process.env.ROOT + '/src/index.html'));

app.get('/about', (req, res) => res.sendFile(process.env.ROOT + '/src/about.html'));

app.get('/contact', (req, res) => res.sendFile(process.env.ROOT + '/src/contact-me.html'));

// Need to figure out how to handle unknow routes/urls

const PORT = 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(" --- Server listening on port 3000 --- ");
})
