var express=require('express');
var Controller = require('../controllers/favorito');

var api = express.Router();

api.put('/updateProducto/:id',Controller.updateProducto);
api.get('/producto_delete/:Id_Producto?', Controller.deleteFavorito);
api.get('/listapedidos', Controller.verPedidos)  //lista de pedidos
api.get('/producto', Controller.verProducto)   //lista de productos
api.get('/pedidos/:id?', Controller.pedidos)  //carrito crea
api.get('/pedidos', Controller.verPedidos)  //carrito muestra
api.get('/producto/:id?', Controller.verProducto)   //lista de productos


//exportar mi api
module.exports = api;
