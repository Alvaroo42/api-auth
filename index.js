'use strict'


const config = require('./config');
const express = require('express');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');
const logger = require('morgan');
const mongojs = require('mongojs');
const cors = require('cors');
const AuthMiddleware = require('./middlewares/auth.middleware');

const port = config.PORT;
const urlDB = config.DB;
const TokenHelper = require('./helpers/token.helper');

const app = express();
const db = mongojs(urlDB);
const id = mongojs.ObjectID;

const PassHelper = require('./helpers/pass.helper');
const moment = require('moment');

app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api/user', AuthMiddleware.auth, (req, res, next) => {
    db.collection('user').find((err, coleccion) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(coleccion);
    });
});

app.get('/api/user/:id', AuthMiddleware.auth, (req, res, next) => {
    const elementoId = req.params.id;
    db.collection('user').findOne({ _id: id(elementoId) }, (err, elementoRecuperado) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(elementoRecuperado);
    });
});

app.get('/api/auth', AuthMiddleware.auth, (req, res, next) => {
    db.collection('user').find({}, { displayName: 1, email: 1, _id: 0 }, (err, usuarios) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });
        res.json({ result: 'OK', usuarios: usuarios });
    });
});

app.get('/api/auth/me', AuthMiddleware.auth, (req, res, next) => {
    // req.user.id viene de nuestro middleware auth
    db.collection('user').findOne({ _id: id(req.user.id) }, (err, usuario) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });
        if (!usuario) return res.status(404).json({ result: 'KO', msg: 'Usuario no encontrado' });
        
        res.json({ result: 'OK', usuario: usuario });
    });
});

app.post('/api/user', (req, res, next) => {
    const nuevoElemento = req.body;
    db.collection('user').save(nuevoElemento, (err, coleccionGuardada) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });;
        res.json(coleccionGuardada);
    });
});

app.post('/api/auth/reg', (req, res, next) => {
    const { name, email, pass } = req.body;

    if (!name || !email || !pass) {
        return res.status(400).json({ result: 'KO', msg: 'Faltan campos obligatorios' });
    }

    db.collection('user').findOne({ email: email }, (err, existingUser) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });
        if (existingUser) return res.status(400).json({ result: 'KO', msg: 'El email ya está registrado' });

        PassHelper.encriptaPassword(pass).then(hashedPassword => {
            const newUser = {
                displayName: name,
                email: email,
                password: hashedPassword,
                signupDate: moment().unix(),
                lastLogin: moment().unix()
            };

            db.collection('user').save(newUser, (err, savedUser) => {
                if (err) return res.status(500).json({ result: 'KO', msg: err });

                const token = TokenHelper.creaToken(savedUser);
                res.json({ result: 'OK', token: token, usuario: savedUser });
            });
        });
    });
});

app.post('/api/auth/login', (req, res, next) => {
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.status(400).json({ result: 'KO', msg: 'Debe suministrar un correo y una contraseña' });
    }

    db.collection('user').findOne({ email: email }, (err, user) => {
        if (err) return res.status(500).json({ result: 'KO', msg: err });
        if (!user) return res.status(400).json({ result: 'KO', msg: 'El usuario no está registrado o la contraseña no es correcta' });

        // Comparamos contraseñas
        PassHelper.comparaPassword(pass, user.password).then(isMatch => {
            if (!isMatch) return res.status(400).json({ result: 'KO', msg: 'El usuario no está registrado o la contraseña no es correcta' });

            const token = TokenHelper.creaToken(user);
            const horaActual = moment().unix();

            // Actualizamos la fecha del último login
            db.collection('user').update(
                { _id: id(user._id) },
                { $set: { lastLogin: horaActual } },
                { safe: true, multi: false },
                (err, result) => {
                    if (err) return res.status(500).json({ result: 'KO', msg: err });
                    
                    user.lastLogin = horaActual;
                    res.json({ result: 'OK', token: token, usuario: user });
                }
            );
        });
    });
});

app.put('/api/user/:id', AuthMiddleware.auth, (req, res, next) => {
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

app.delete('/api/user/:id', AuthMiddleware.auth, (req, res, next) => {
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