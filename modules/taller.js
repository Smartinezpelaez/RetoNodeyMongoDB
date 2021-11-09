const mongoose = require('mongoose');

let tallerSchema = new mongoose.Schema({
    
    tipDocumento : String,
    documentoIdentificación: Number,
    nombre : String,
    apellido : String,
    direccion : String,
    correo: String,
    telFijo: Number,
    celular :  Number,
    enlaceWeb : String,
    descriPerfil : String

});

module.exports = mongoose.model('Taller',tallerSchema,'Datos');