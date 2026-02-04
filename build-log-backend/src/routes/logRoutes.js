import express from "express";
import { createLog, getLogs } from "../controllers/logController.js";

const router = express.Router();

router.get("/", getLogs);
router.post("/", createLog);

export default router;
