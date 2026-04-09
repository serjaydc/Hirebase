import express from "express";

import {
  authSignin,
  authSignout,
  authSignup,
  authUser,
} from "../controllers/auth.controller.js";
import { protect } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", authSignup);
router.post("/signin", authSignin);
router.post("/signout", authSignout);
router.get("/user", protect, authUser);

export default router;
