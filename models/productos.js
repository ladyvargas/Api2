var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Productos= Schema({
        Id_Producto:String,
        name_producto: String,
        description_producto:String,
        precio_producto:String
    },
    {collection: "productos"}
);

module.exports = mongoose.model('Productos', Productos)
