var Producto = require('../models/productos');
var listpedidos = require('../models/pedidos');

function verProducto(req, res){
	Producto.find({ }).exec((err,favoritos)=>{
		if(err){
			res.status(500).send({message: 'error al deveolver los datos'});
		}else {
			if(!favoritos){
			res.status(404).send({message: 'no existen datos'});
			}else{
				console.log(favoritos);
				res.status(200).send({favoritos});
			}
		}
	});
}

function verPedidos(req, res){
	listpedidos.find({ }).exec((err,favoritos)=>{
		if(err){
			res.status(500).send({message: 'error al deveolver los datos'});
		}else {
			if(!favoritos){
				res.status(404).send({message: 'no existen datos'});
			}else{
				console.log(favoritos);
				res.status(200).send(favoritos);
			}
		}
	});
}

async function pedidos(req,res) {
	var Id_Producto = req.query.id;
	let allOrderPromise = () => {
		return new Promise((resolve) => {
			Producto.find({"Id_Producto": Id_Producto}, function(err,lista_productos){
				if(err){
					res.status(500).send({message:'error al buscar'});
				}else{
					if(!lista_productos){
						res.status(400).send({message:'no existe dato'});
					}else{
						console.log(lista_productos);
						res.status(200).send({lista_productos});
						resolve(lista_productos);
					}
				}
			});
		});
	}
	const final = await allOrderPromise();
	listpedidos.insertMany(final, function(err,lista_pedidos){
		if(err){
			res.status(500).send({message:'error al buscar'});
		}else{
			if(!lista_pedidos){
				res.status(400).send({message:'no existe dato'});
			}else{
				console.log(lista_pedidos);
				res.status(200).send({lista_pedidos});
			}
		}
	});
	return {
		data: final
	};
}

function updateProducto(req, res){
	var Id = req.params.id;
	const update = JSON.parse(JSON.stringify(req.body));
	const options = { "returnNewDocument": true };

	Producto.findOneAndUpdate(Id,{ "$set": update}, options,(err, todo) => {
		if(err){
			console.log(update);
			console.log(todo);
			res.status(500).send({message: 'error al actualizar los datos'});
		}else{
			console.log(todo);
			res.status(200).send(todo);
		}
	});
}


function deleteFavorito(req,res){
	var id = req.params.Id_Producto;
	Producto.deleteOne({"Id_Producto": id}, function(err,favoritoId){
		if(err){
			res.status(500).send({message:'error al eliminar'});
		}
		if(!favoritoId){
			console.log(favoritoId);
			res.status(404).send({message:'no existe dato'});
		}else {
			console.log(favoritoId);
			res.status(200).send({message: 'dato borrado ok'});
		}
	});
}

module.exports = {

	pedidos,
	verPedidos,
	verProducto,
	updateProducto,
	deleteFavorito
}
