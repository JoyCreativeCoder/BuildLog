import Log from "../models/Log.js";

export const createLog = async (req, res) => {
  try {
    const { title, details, category, date } = req.body;

    const log = await Log.create({
      title,
      details,
      category,
      date: date || new Date(),
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
