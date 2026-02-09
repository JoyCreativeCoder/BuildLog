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

export const deleteLog = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedLog = await Log.findByIdAndDelete(id);
    if (!deletedLog) {
      return res.status(400).json({ message: "log not found" });
    }
    res.status(200).json({ message: "Log deleted successfully " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateLog = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }

    const updatedLog = await Log.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.status(200).json({ message: "Log updated successfully", updatedLog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
