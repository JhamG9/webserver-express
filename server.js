const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port  = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

//Helpers

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');  
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'JhamG'
    })
});

//req => Request
//res => Respuesta
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'JhamG'
    });
});


// app.get('/data', (req, res) => {
//     res.send('Hola mundo');
// })

app.listen(port, () => {
    console.log("Escuchando peticiones en el puerto "+port);
})