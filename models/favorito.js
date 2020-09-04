'use strict'

var mongoose = require('mongoose');

//definir los objetos que permitern trabajar con la bd

var Schema = mongoose.Schema;

//objeto
var FavoritoSchema= Schema({
		user_id: String,
		password:String,
		sex:String,
},
{collection: "testtable"}
);

//generar el modelo
module.exports = mongoose.model('cliente', FavoritoSchema)
