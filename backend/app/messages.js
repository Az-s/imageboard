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
    const messages = fileDb.getItems();
    res.send(messages);
});

router.post('/', upload.single('image'), (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({ error: 'Data not valid' });
    }
    const message = {
        author: req.body.author ? req.body.author : 'Anonymous',
        message: req.body.message,
    };

    if (req.file) {
        message.image = req.file.filename;
    }

    const newMessage = fileDb.addItem(message);

    res.send(newMessage);
});

module.exports = router;