'use strict'

var mongoose = require('mongoose');

//definir los objetos que permitern trabajar con la bd

var Schema = mongoose.Schema;

//objeto
var users= Schema({
        _id:String,
        UserName:String,
        Email: String
    },
    {collection: "users"}
);

//generar el modelo
module.exports = mongoose.model('users', users)
