import express from "express";
import {
  createLog,
  getAllLogs,
  getLogById,
  updateLog,
  deleteLog,
  getLogsCount,
} from "../controllers/logController.js";

const router = express.Router();

router.get("/stats/count", getLogsCount);

router.get("/", getAllLogs);
router.get("/:id", getLogById);
router.post("/", createLog);
router.put("/:id", updateLog);
router.delete("/:id", deleteLog);

export default router;
