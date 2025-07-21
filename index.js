import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config(); // Carga las variables del archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite peticiones desde otros orígenes
app.use(bodyParser.json()); // Interpreta los body en formato JSON

// Rutas principales
app.use(productsRoutes);
app.use(authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Middleware para rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
