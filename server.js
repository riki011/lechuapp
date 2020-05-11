const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");
const controladorClient = require('./controladorClientes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/client", controladorClient.obtenerClientes);
app.get("/client/:id", controladorClient.obtenerClientesPorId);

app.post("/client", controladorClient.crearNuevoCliente);

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});
