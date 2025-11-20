require('dotenv').config();

const mongoose = require('mongoose'); // <-- Importamos Mongoose

// Importa el módulo de Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Importar el router de productos
const productosRouter = require('./routes/productos');

// Define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Configura Express para que use JSON (Middleware esencial)
app.use(express.json());

// Define tu primer Endpoint (Ruta Raíz /)
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de la Skateshop!');
});

// ¡Arranca el servidor!
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
});

const MONGO_URI = process.env.MONGO_URI; // <-- Obtenemos la URL del .env

// Middleware esencial
app.use(express.json());

// Función para conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB Conectada Exitosamente.');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error.message);
        process.exit(1); // Sale de la aplicación si falla la conexión
    }
};

// Ruta de prueba (opcional)
app.get('/', (req, res) => {
    res.send('¡API de Skateshop en línea!');
});

// Usamos el router de productos. 
// Todas las rutas en 'routes/productos.js' serán prefijadas con '/api/productos'
app.use('/api/productos', productosRouter); // <-- NUEVA LÍNEA

// Llamamos a la función de conexión y luego iniciamos el servidor
connectDB().then(() => {
    // Definición de tu ruta de prueba (aún la mantenemos)
    app.get('/', (req, res) => {
        res.send('¡API de Skateshop en línea!');
    });

    // Arranca el servidor
    app.listen(PORT, () => {
        console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
    });
});