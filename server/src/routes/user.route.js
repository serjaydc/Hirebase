import express from "express";
import { protect } from "../middleware/verifyToken.js";
import { userProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", protect, userProfile);

export default router;
