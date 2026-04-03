import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactionId: {
      type: String,
      unique: true,
      default: () => uuidv4(),
    },
    amount: {
      type: Number,
      default: 39.98,
    },
    currency: {
      type: String,
      default: "GBP",
    },
    status: {
      type: String,
      enum: ["active", "cancelled"],
    },
    method: {
      type: String,
      default: "card",
    },
    cardLast4: {
      type: String,
    },
    cardBrand: {
      type: String,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
