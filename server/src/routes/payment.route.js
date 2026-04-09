import express from "express";
import { protect } from "../middleware/verifyToken.js";
import {
  cancelMonthlyPayment,
  monthlyPayment,
  planInfo,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/upgrade", protect, monthlyPayment);
router.post("/downgrade", protect, cancelMonthlyPayment);
router.get("/plan", protect, planInfo);

export default router;
