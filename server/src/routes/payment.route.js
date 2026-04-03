import express from "express";
import { protect } from "../middleware/verifyToken.js";
import {
  downgradeUserPlan,
  makePayment,
  planInfo,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/upgrade", protect, makePayment);
router.post("/downgrade", protect, downgradeUserPlan);
router.get("/plan", protect, planInfo);

export default router;
