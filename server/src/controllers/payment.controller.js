import Payment from "../models/payment.model.js";
import { upgradeUserPlan } from "../utils/upgradeUserPlan.js";

export const makePayment = async (req, res) => {
  try {
    const { cardNumber, cardExpMonth, cardExpYear, firstName, lastName } =
      req.body;

    if (
      !cardNumber ||
      !firstName ||
      !lastName ||
      !cardExpMonth ||
      !cardExpYear
    ) {
      return res.status(400).json({
        message: "Missing payment details",
      });
    }

    const normalizedCard = cardNumber.replace(/\s/g, "");

    let cardBrand;

    if (normalizedCard.startsWith("4")) {
      cardBrand = "Visa";
    } else if (normalizedCard.startsWith("5")) {
      cardBrand = "MasterCard";
    } else if (normalizedCard.startsWith("3")) {
      cardBrand = "American Express";
    } else {
      return res.status(400).json({
        message: "Unsupported card type",
      });
    }

    if (normalizedCard.length < 16) {
      return res.status(400).json({
        message: "Invalid card number",
      });
    }

    const last4 = normalizedCard.slice(-4);

    const { expires, isExtending } = await upgradeUserPlan(req.user);

    await Payment.create({
      user: req.user._id,
      status: "active",
      cardLast4: last4,
      cardBrand,
      amount: 39.98,
      currency: "GBP",
    });

    return res.json({
      message: isExtending
        ? "Premium has been extended"
        : "Account has been upgraded to Premium",
      planExpiresAt: expires,
      cardBrand,
      cardLast4: last4,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const downgradeUserPlan = async (req, res) => {
  try {
    const user = req.user;
    const currentDate = new Date();
    const isPremiumActive =
      user.plan === "premium" &&
      user.planExpiresAt &&
      user.planExpiresAt > currentDate;

    if (!isPremiumActive) {
      return res
        .status(404)
        .json({ message: "You do not have an active premium plan" });
    }
    user.plan = "starter";
    user.planExpiresAt = null;

    await user.save();

    await Payment.findOneAndUpdate(
      { user: user._id, status: "active" },
      { status: "cancelled" },
    );

    return res.json({
      message: "Premium has been cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const planInfo = async (req, res) => {
  try {
    const user = req.user;

    const payments = await Payment.find({
      user: user._id,
    }).sort({ createdAt: -1 });

    if (payments.length === 0) {
      return res.status(404).json({
        message: "No payment history",
      });
    }

    return res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      plan: user.plan,
      planExpiresAt: user.planExpiresAt,

      payments: payments.map((payment) => ({
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        method: payment.method,
        cardLast4: payment.cardLast4,
        cardBrand: payment.cardBrand,
        transactionId: payment.transactionId,
        createdAt: payment.createdAt,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
