const express = require('express');
const multer = require('multer');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const fileDb = require('../fileDb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', (req, res) => {
    const products = fileDb.getItems();
    res.send(products);
});

router.post('/', upload.single('image'), (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({ error: 'Data not valid' });
    }

    const product = {
        author: req.body.author,
        message: req.body.message,
    };

    if (!req.body.author) {
        req.body.author = 'anonymous';
    }

    if (req.file) {
        product.image = req.file.filename;
    }

    const newProduct = fileDb.addItem(product);

    res.send(newProduct);
});

module.exports = router;