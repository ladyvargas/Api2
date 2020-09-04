const mongoose = require('mongoose');
const app = require('./app');//configuracion
const cors = require('cors');
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var port=3000;

//conexion a bdd con una funcion
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://ladyVS:Llvs0987654321@104.214.48.167:27017/Pedidos?authSource=admin',
{useNewUrlParser:true, useUnifiedTopology: true }  
//ptions:{promiseLibrary:mongoose.Promise}}
, (err, res)=>{
	if(err){
		throw err;
	}else{
		console.log('conexion mongo ok');
		app.listen(port, function(){

  console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
});

}
});




