import Fastify from 'fastify';
import db from './db.js';
import rutas from './rutas.js';
import cors from '@fastify/cors';

const fastify = Fastify({logger:true});
await fastify.register(cors, {

});

// eslint-disable-next-line no-unused-vars
fastify.get('/',async function(req, res) {
	return { hello: 'world'};
});

//Incorporación de las rutas
rutas.forEach((ruta) => {
	fastify.route(ruta);
});

async function database() {
	try {
		await db.sync();
		console.log('Conectado a la base de datos');
	} catch(e) {
		console.log(e);
	}
}

try {
	fastify.listen({port:3500});
	database();
} catch(erro) {
	console.log(erro);
}