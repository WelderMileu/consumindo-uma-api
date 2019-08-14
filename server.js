const express = require('express');
const path = require('path')
const morgan = require('morgan')
const app = express()

port = process.env.PORT || 3000;

const { usuarios } = require("./api");

app.set("view engine","ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use(morgan('dev'));

app.get("/",(req, res) => {
    const mostrar = usuarios;
    res.render('inicial', { mostrar });
});

app.listen(port,
    console.log(`Rodando em localhost:${port}`)
);