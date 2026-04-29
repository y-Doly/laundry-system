const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateStatus,
  getDashboard
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getOrders);
router.put('/:id/status', updateStatus);
router.get('/dashboard', getDashboard);

module.exports = router;