const Traffic = require('../models/Traffic');
const { predictCongestion } = require('../utils/model');

exports.getTrafficData = async (req, res) => {
    const data = await Traffic.find();
    res.json(data);
};

exports.addTrafficData = async (req, res) => {
    const newTraffic = new Traffic(req.body);
    await newTraffic.save();
    res.status(201).json(newTraffic);
};

exports.predictCongestion = (req, res) => {
    const inputData = req.body;
    const prediction = predictCongestion(inputData);
    res.json({ prediction });
};
