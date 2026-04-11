import { useForm } from "react-hook-form";
import { useJobStore } from "../store/jobStore";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const AddJob = () => {
  const navigate = useNavigate();
  const { addJob } = useJobStore();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      jobStatus: "applied",
      jobPriority: "low",
      jobSource: "other",
    },
  });

  const onSubmit = async (data) => {
    try {
      await addJob(data);
      reset();
      navigate("/dashboard/jobs");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="mb-4">
        <Link
          to="/dashboard/jobs"
          className="text-neutral-500 flex items-center gap-2 hover:text-black transition-colors text-lg mb-4"
        >
          <MoveLeft />
          <span>Back</span>
        </Link>
        <h1 className="font-medium text-2xl lg:text-3xl leading-tight">
          Add New Job
        </h1>
        <p className="text-neutral-500">Track a new job application</p>
      </div>
      <div className="border border-neutral-200 rounded-lg max-w-4xl">
        <form className="w-full p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between mb-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="companyName"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Company Name *
              </label>
              <input
                {...register("companyName", { required: true })}
                type="text"
                id="companyName"
                placeholder="e.g., Google, Microsoft"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="jobRole"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Job Role *
              </label>
              <input
                {...register("jobRole", { required: true })}
                type="text"
                id="jobRole"
                placeholder="e.g., Software Engineer Intern"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label
                htmlFor="jobStatus"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Status
              </label>
              <select
                {...register("jobStatus")}
                id="jobStatus"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="jobPriority"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Priority
              </label>
              <select
                {...register("jobPriority")}
                id="jobPriority"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="jobSource"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Source
              </label>
              <select
                {...register("jobSource")}
                id="jobSource"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              >
                <option value="linkedin">Linkedin</option>
                <option value="indeed">Indeed</option>
                <option value="companywebsite">Company Website</option>
                <option value="referral">Referral</option>
                <option value="recruiter">Recruiter</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="dateApplied"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Date Applied
              </label>
              <input
                {...register("dateApplied")}
                type="date"
                id="dateApplied"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="interviewDate"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Interview Date
              </label>
              <input
                {...register("interviewDate")}
                type="date"
                id="interviewDate"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="followUpDate"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Follow-Up Date
              </label>
              <input
                {...register("followUpDate")}
                type="date"
                id="followUpDate"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label
                htmlFor="jobLocation"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Location
              </label>
              <input
                {...register("jobLocation")}
                type="text"
                id="jobLocation"
                placeholder="e.g., London, UK"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="jobSalaryRange"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Salary Range
              </label>
              <input
                {...register("jobSalaryRange")}
                type="text"
                id="jobSalaryRange"
                placeholder="e.g., £80k - £100k"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="applicationURL"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Application URL
              </label>
              <input
                {...register("applicationURL")}
                type="text"
                id="applicationURL"
                placeholder="https://..."
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between mb-4 border-t border-neutral-200 pt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="contactName"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Contact Name
              </label>
              <input
                {...register("contactName")}
                type="text"
                id="contactName"
                placeholder="Recruiter Name"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="contactEmail"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Contact Email
              </label>
              <input
                {...register("contactEmail")}
                type="email"
                id="contactEmail"
                placeholder="recruiter@company.com"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="contactPhone"
                className="text-sm font-medium text-black/70 mb-1"
              >
                Contact Phone
              </label>
              <input
                {...register("contactPhone")}
                type="tel"
                id="contactPhone"
                placeholder="+44 123 456 7890"
                className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="jobDescription"
              className="text-sm font-medium text-black/70 mb-1"
            >
              Notes
            </label>
            <textarea
              {...register("jobDescription")}
              type="text"
              id="jobDescription"
              placeholder="Add any notes about application, interview prep, contacts, etc..."
              className="outline-none border border-neutral-300 rounded-lg p-2 placeholder:text-sm resize-none h-48"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors w-full cursor-pointer"
            >
              Add Job
            </button>
            <button
              onClick={() => navigate("/dashboard/jobs")}
              type="button"
              className="py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJob;
