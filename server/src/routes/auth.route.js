import express from "express";

import {
  authSignin,
  authSignout,
  authSignup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", authSignup);
router.post("/signin", authSignin);
router.post("/signout", authSignout);

export default router;
