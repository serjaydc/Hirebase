import express from "express";
import {
  addJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  updateJob,
} from "../controllers/job.controller.js";
import { protect } from "../middleware/verifyToken.js";
import { checkPlan } from "../middleware/checkPlan.js";

const router = express.Router();

router.post("/add", protect, checkPlan, addJob);
router.get("/all", protect, getAllJobs);
router.get("/:id", protect, getSingleJob);
router.patch("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

export default router;
