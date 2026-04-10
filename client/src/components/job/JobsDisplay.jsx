import { ArrowRight, Briefcase, Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { statusStyles } from "../../utils/jobStyles";

const JobsDisplay = ({ jobs }) => {
  const appliedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (jobs.length === 0) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-4 mb-4">
        <div className="flex flex-col items-center justify-center">
          <Briefcase className="size-14 text-neutral-500 mb-2" />
          <p className="font-medium text-lg mb-2">No jobs found</p>
          <p className="text-neutral-500 mb-4">
            Start by adding your first job application
          </p>
          <Link
            to="/dashboard/add"
            className="flex items-center gap-2 bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <span>Add Job</span> <Plus />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="border border-neutral-200 rounded-lg mb-4 overflow-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Company
            </th>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Role
            </th>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Status
            </th>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Applied Date
            </th>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Location
            </th>
            <th className="text-start p-4 text-sm font-semibold text-black/70">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border-t border-neutral-200">
          {jobs.map((job) => (
            <tr
              key={job._id}
              className="hover:bg-neutral-200/60 transition-colors"
            >
              <td className="p-4 font-medium">{job.companyName}</td>
              <td className="p-4">{job.jobRole}</td>
              <td className="p-4 capitalize">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    statusStyles[job.jobStatus] || " bg-gray-100 text-gray-700"
                  }`}
                >
                  {job.jobStatus}
                </span>
              </td>
              <td className="p-4 flex items-center gap-1">
                <Calendar className="size-5" />
                {appliedDate(job.dateApplied)}
              </td>
              <td className="p-4">{job.jobLocation || "N/A"}</td>
              <td className="p-4">
                <Link
                  to={`/dashboard/jobs/${job._id}`}
                  className="flex items-center gap-1 text-blue-600 font-medium"
                >
                  <span>View</span>
                  <ArrowRight className="size-5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default JobsDisplay;
