const express = require('express');
const cors = require('cors');

require('dotenv').config();

require('./database/connection');

const authRoutes = require('./routes/auth.routes');
const productosRoutes = require('./routes/productos.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/productos', productosRoutes);

app.get('/', (req, res) => {

    res.send("API funcionando");

});

app.listen(process.env.PORT, () => {

    console.log(
        "Servidor en puerto " +
        process.env.PORT
    );

});