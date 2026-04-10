import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    jobStatus: {
      type: String,
      enum: ["applied", "interview", "rejected", "offer"],
      default: "applied",
    },
    jobPriority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    jobSource: {
      type: String,
      enum: [
        "linkedin",
        "indeed",
        "companywebsite",
        "referral",
        "recruiter",
        "other",
      ],
      default: "other",
    },
    jobLocation: {
      type: String,
    },
    jobSalaryRange: {
      type: String,
    },
    applicationURL: {
      type: String,
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
    interviewDate: {
      type: Date,
    },
    followUpDate: {
      type: Date,
    },
    jobDescription: {
      type: String,
    },
    contactName: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
