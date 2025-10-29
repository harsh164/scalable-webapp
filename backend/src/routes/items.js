const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createItem, getItems, deleteItem } = require('../controllers/itemController');

router.post('/', auth, createItem);
router.get('/', auth, getItems);
router.delete('/:id', auth, deleteItem);

module.exports = router;
