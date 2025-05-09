const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { tableNumber, items } = req.body;
  const order = new Order({ tableNumber, items });
  const savedOrder = await order.save();
  res.json(savedOrder);
};
