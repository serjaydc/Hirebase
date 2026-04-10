import Job from "../models/job.model.js";
import mongoose from "mongoose";

export const addJob = async (req, res) => {
  try {
    const user = req.user;
    const jobsCount = await Job.countDocuments({
      user: user._id,
    });

    if (user.plan === "starter" && jobsCount >= 50) {
      return res.status(403).json({
        message: "Starter plan limit reached (50 jobs). Upgrade to premium",
      });
    }

    const {
      companyName,
      jobRole,
      jobStatus,
      jobPriority,
      jobSource,
      jobLocation,
      jobSalaryRange,
      applicationURL,
      dateApplied,
      interviewDate,
      followUpDate,
      jobDescription,
      contactName,
      contactEmail,
      contactPhone,
    } = req.body;

    if (!companyName || !jobRole) {
      return res.status(400).json({ message: "* Fields are required" });
    }

    const newJob = {
      user: user._id,

      companyName: companyName.trim(),
      jobRole: jobRole.trim(),

      jobStatus,
      jobPriority,
      jobSource,

      jobLocation: jobLocation ? jobLocation?.trim() : undefined,
      jobSalaryRange: jobSalaryRange ? jobSalaryRange?.trim() : undefined,
      applicationURL:
        applicationURL && applicationURL.startsWith("https://")
          ? applicationURL.trim()
          : undefined,

      dateApplied: dateApplied ? new Date(dateApplied) : undefined,
      interviewDate: interviewDate ? new Date(interviewDate) : undefined,
      followUpDate: followUpDate ? new Date(followUpDate) : undefined,

      jobDescription: jobDescription
        ? jobDescription?.trim()
        : "No Description",

      contactName: contactName ? contactName?.trim() : undefined,
      contactEmail: contactEmail ? contactEmail?.trim() : undefined,
      contactPhone: contactPhone ? contactPhone?.trim() : undefined,
    };

    if (newJob.interviewDate) {
      newJob.jobStatus = "interview";
    }

    const job = await Job.create(newJob);

    res.status(201).json({
      message: "Job added successfully",
      job,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const user = req.user;

    const jobs = await Job.find({ user: user._id }).sort({ createdAt: -1 });

    return res.status(200).json({ jobs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleJob = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid job ID",
      });
    }

    const job = await Job.findOne({
      _id: id,
      user: user._id,
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    return res.status(200).json({
      job,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid job ID",
      });
    }

    const allowedFields = [
      "companyName",
      "jobRole",
      "jobStatus",
      "jobPriority",
      "jobSource",
      "jobLocation",
      "jobSalaryRange",
      "applicationURL",
      "dateApplied",
      "interviewDate",
      "followUpDate",
      "jobTags",
      "jobDescription",
      "contactName",
      "contactEmail",
      "contactPhone",
    ];

    const updateData = Object.fromEntries(
      Object.entries(req.body).filter(([key]) => allowedFields.includes(key)),
    );

    const job = await Job.findOneAndUpdate(
      {
        _id: id,
        user: user._id,
      },
      updateData,
      { returnDocument: "after", runValidators: true },
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }
    return res.status(200).json({
      job,
      message: "Job updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid job ID",
      });
    }

    const job = await Job.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }
    return res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
