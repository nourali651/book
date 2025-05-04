const express = require('express');
const router = express.Router();
const bookController = require('../books/book.controller');
const multer = require('multer');
const path = require('path');

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/create-book', upload.single('coverImage'), bookController.createBook);
router.put('/edit/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;

