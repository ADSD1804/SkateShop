const fastify = require("fastify")({
  logger: true,
});

// Importar rutas de productos
const productsRoutes = require("./routes/productsRoutes");

require("./utils/mongoose");

fastify.get("/", (request, reply) => {
  reply.send({ hello: "SkateShop Backend is running!" });
});

// Recorrer rutas de productos
productsRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen({ port: 3000, host: "localhost" });
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();
