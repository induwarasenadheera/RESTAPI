const express = require('express');
const Product = require('./product');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error('Product not found');
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const productName = req.params.name;
        const product = await Product.find({ name: productName });
        if (!product) throw new Error('Product not found');
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const product = new Product({ name, price, quantity });
        await product.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) throw new Error('Product not found');
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) throw new Error('Product not found');
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
