const express = require('express');
const connectDB = require('./db');
const productRoutes = require('./productRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/product', productRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`API server started on port ${port}.`);
});