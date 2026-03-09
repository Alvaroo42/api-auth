'use strict'


const config = require('./config');
const express = require('express');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');
const logger = require('morgan');
const mongojs = require('mongojs');
const cors = require('cors');

const port = config.PORT;
const urlDB = config.DB;
const accessToken = config.TOKEN;

const app = express();
const db = mongojs(urlDB);
const id = mongojs.ObjectID;

var allowCrossTokenOrigin = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    return next();
};
var allowCrossTokenMethods = (req, res, next) => {
    res.header("Access-Control-Allow-Methods", "*");
    return next();
};
var allowCrossTokenHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    return next();
};

var auth = (req, res, next) => {
    if (!req.headers.token) {
        res.status(401).json({ result: 'KO', msg: "Envía un código válido en la cabecera 'token'" });
        return;
    };
    const queToken = req.headers.token;
    if (queToken === accessToken) {
        return next();
    } else {
        res.status(401).json({ result: 'KO', msg: "No autorizado" });
    };
};

app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(allowCrossTokenOrigin);
app.use(allowCrossTokenMethods);
app.use(allowCrossTokenHeaders);

app.get('/', auth, (req, res) => {
    res.send('Hola estás en la página inicial');
    console.log('Se recibió una petición get a través de https');
});

app.get('/api/user', auth, (req, res, next) => {
    db.collection('user').find((err, coleccion) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(coleccion);
    });
});

app.get('/api/user/:id', auth, (req, res, next) => {
    const elementoId = req.params.id;
    db.collection('user').findOne({ _id: id(elementoId) }, (err, elementoRecuperado) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(elementoRecuperado);
    });
});

app.post('/api/user', auth, (req, res, next) => {
    const nuevoElemento = req.body;
    db.collection('user').save(nuevoElemento, (err, coleccionGuardada) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(coleccionGuardada);
    });
});

app.put('/api/user/:id', auth, (req, res, next) => {
    const elementoId = req.params.id;
    const nuevosRegistros = req.body;
    db.collection('user').update({ _id: id(elementoId) },
        { $set: nuevosRegistros },
        { safe: true, multi: false },
        (err, result) => {
            if (err) return res.status(500).json({ result: 'KO', msg: err });;
            res.json(result);
        });
});

app.delete('/api/user/:id', auth, (req, res, next) => {
    const elementoId = req.params.id;
    db.collection('user').remove({ _id: id(elementoId) }, (err, resultado) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(resultado);
    });
});

https.createServer({
        cert: fs.readFileSync('./cert/cert.pem'),
        key: fs.readFileSync('./cert/key.pem')
 }, app).listen(port,  () => {
    console.log(`API AUTH ejecutándose en https://localhost:${port}/api/{user|auth}/{id}`);
});