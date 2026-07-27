const Product = require("../models/productModel");

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: async (request, reply) => {
      const products = await Product.find();
      return products;
    },
  },
  {
    url: "/products",
    method: "POST",
    handler: (request, reply) => {
      reply.send("Create product route is working!");
    },
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: (request, reply) => {
      reply.send("Delete product route is working!");
    },
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: (request, reply) => {
      reply.send("Update product route is working!");
    },
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: (request, reply) => {
      reply.send("Single product route is working!");
    },
  },
];

module.exports = routes;
