var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pedidos= Schema({
        id_cliente : String,
        Nombre : String,
        Pedidos : [
            {
                Id_Producto : String,
                name_producto : String,
                description_producto : String,
                precio_producto : String
            }
        ]
    },
    {collection: "pedidos"}
);

module.exports = mongoose.model('Pedidos', Pedidos)
