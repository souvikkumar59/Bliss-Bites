const MenuItem = require('../models/MenuItem');

exports.getMenuItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

exports.addMenuItem = async (req, res) => {
  const newItem = new MenuItem(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
};
