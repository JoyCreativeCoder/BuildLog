import express from "express";
import {
  createLog,
  getLogs,
  deleteLog,
  updateLog,
} from "../controllers/logController.js";

const router = express.Router();

router.get("/", getLogs);
router.post("/", createLog);
router.delete("/:id", deleteLog);
router.put("/:id", updateLog);

export default router;
