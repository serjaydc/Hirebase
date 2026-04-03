export const checkPlan = async (req, res, next) => {
  try {
    const user = req.user;

    if (
      user.plan === "premium" &&
      user.planExpiresAt &&
      new Date(user.planExpiresAt) < new Date()
    ) {
      user.plan = "starter";
      user.planExpiresAt = null;

      await user.save();
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Plan check failed" });
  }
};
