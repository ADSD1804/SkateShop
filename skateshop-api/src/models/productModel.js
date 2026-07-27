const {Schema, model} = require('mongoose');

// Esquema de producto
const productSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
    category: String,
}, {
    timestamps: true,
    versionKey: false,
});

// Exportar esquema de producto como modelo
module.exports = model('Product', productSchema);