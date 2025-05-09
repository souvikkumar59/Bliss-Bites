const Table = require('../models/Table');

exports.getTables = async (req, res) => {
  const tables = await Table.find();
  res.json(tables);
};

exports.selectTable = async (req, res) => {
  const { number } = req.body;
  const table = await Table.findOneAndUpdate({ number }, { isOccupied: true }, { new: true });
  res.json(table);
};
