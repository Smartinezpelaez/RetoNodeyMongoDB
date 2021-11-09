
const { Router } = require('express');
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const tallerSchema = require("./modules/taller.js");



const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Conexion a base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.vetgd.mongodb.net/ConexionNodeMongoBD?retryWrites=true&w=majority"); 

// Operaciones crud
router.get('/',(req, res)=>{
    res.send('El inicio de mi api');
})
router.get('/taller', (req,res)=>{
    tallerSchema.find(function(err,datos){
        if (err){
            console.log('Error leyendo las tareas')
        }else{
            res.send(datos);
        }
    })
});

router.post('/taller',(req, res)=>{
    let nuevoTaller = new tallerSchema({
        tipoDocumento: req.body.tipoDocumento,
        nombreTareadocumentoIdentificación: req.body.nombreTareadocumentoIdentificación,
        nombre: req.body.nombre,
        apellido : req.body.apellido,
        direccion : req.body.direccion,
        correo : req.body.correo,
        telFijo : req.body.telFijo,
        celular : req.body.celular,
        enlaceWeb : req.body.enlaceWeb,
        descriPerfil : req.body.descriPerfil
    });
    nuevoTaller.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send('Tarea almacenada correctamanete');
    })
});


app.use (router);
app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
    });