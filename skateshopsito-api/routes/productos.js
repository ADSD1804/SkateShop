const express = require('express');
const router = express.Router(); // Módulo para definir rutas
const Producto = require('../models/Producto'); // Importa el modelo de Producto

// @route   POST api/productos
// @desc    Crea un nuevo producto en la base de datos
// @access  Privado (Necesitará autenticación en el futuro)
router.post('/', async (req, res) => {
    
    // Extraemos todos los datos que vienen en el cuerpo de la solicitud (req.body)
    const { nombre, descripcion, marca, categoria, precio, stock, imagenes } = req.body;
    
    try {
        // 1. Creamos una nueva instancia del modelo Producto con los datos recibidos
        const nuevoProducto = new Producto({
            nombre,
            descripcion,
            marca,
            categoria,
            precio,
            stock,
            imagenes
        });

        // 2. Guardamos el producto en la base de datos (MongoDB)
        const productoGuardado = await nuevoProducto.save();

        // 3. Respondemos al cliente con el nuevo producto creado y un código 201 (Created)
        // El código 201 es el estándar para una creación exitosa.
        res.status(201).json(productoGuardado);

    } catch (err) {
        // Si hay un error, por ejemplo, si faltan campos requeridos (como 'nombre') 
        // o la validación del esquema falla (por ejemplo, precio negativo), 
        // Mongoose lo capturará aquí.

        console.error(err.message);
        
        // Enviamos una respuesta de error 400 (Bad Request)
        if (err.name === 'ValidationError') {
            // Mapeamos los errores de validación de Mongoose para una mejor respuesta
            let errors = {};
            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            return res.status(400).json({ msg: 'Error de validación', errors });
        }

        // Para cualquier otro error del servidor
        res.status(500).send('Error del Servidor');
    }
});

// Exportamos el router para usarlo en server.js
module.exports = router;