export const upgradeUserPlan = async (user) => {
  const currentDate = new Date();

  const isExtending =
    user.plan === "premium" &&
    user.planExpiresAt &&
    user.planExpiresAt > currentDate;

  let expires;

  if (isExtending) {
    expires = new Date(user.planExpiresAt);
    expires.setDate(expires.getDate() + 30);
  } else {
    expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  }

  user.plan = "premium";
  user.planExpiresAt = expires;

  await user.save();

  return { expires, isExtending };
};
