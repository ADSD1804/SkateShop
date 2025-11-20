const mongoose = require('mongoose');

// Definimos el esquema del Producto
const ProductoSchema = new mongoose.Schema({
    // ID: MongoDB crea un _id automáticamente.

    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio.'],
        trim: true,
        maxlength: [100, 'El nombre no puede exceder los 100 caracteres.']
    },
    descripcion: {
        type: String,
        required: false,
        maxlength: [500, 'La descripción no puede exceder los 500 caracteres.']
    },
    marca: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        enum: ['Tablas', 'Ruedas', 'Ejes', 'Zapatillas', 'Ropa', 'Accesorios'], // Opciones válidas
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: [0, 'El precio no puede ser negativo.']
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: [0, 'El stock no puede ser negativo.']
    },
    imagenes: [String], // Un array de strings para URLs de imágenes
    
}, {
    // Añade automáticamente campos de fecha (createdAt, updatedAt)
    timestamps: true 
});

// Exportamos el modelo para usarlo en otros archivos
module.exports = mongoose.model('Producto', ProductoSchema);