const express = require('express');
const { router } = require('./rutas/Api');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', router);


// Manejo de errores. 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});

// Informacion de Ejecucion en el PT 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api/`);
});