var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pedidos= Schema({
        Id_Producto:String,
        name_producto: String,
        description_producto:String,
        precio_producto:String
    },
    {collection: "listpedidos"}
);

module.exports = mongoose.model('Pedidos', Pedidos)
