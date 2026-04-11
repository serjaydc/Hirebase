import { Pencil, Trash2 } from "lucide-react";
import { statusStyles, priorityStyles } from "../../utils/jobStyles";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const SingleJobMeta = ({
  job,
  deleteJob,
  id,
  updateJob,
  isEditing,
  setIsEditing,
  reset,
  onSubmit,
}) => {
  const { register } = useFormContext();
  const navigate = useNavigate();

  const deleteHandler = async (id) => {
    await deleteJob(id);
    navigate("/dashboard/jobs");
  };

  const cancelHandler = () => {
    reset(job);
    setIsEditing(false);
  };

  return (
    <section className="bg-white border border-neutral-200 rounded-lg mb-8 p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div
          className={`mb-2 sm:mb-0 ${isEditing ? "w-full sm:w-fit" : "w-fit"}`}
        >
          {isEditing ? (
            <input
              {...register("companyName")}
              type="text"
              className="border border-neutral-300 rounded-lg py-2 px-4 w-full font-medium text-2xl lg:text-3xl leading-tight mb-2"
            />
          ) : (
            <h1 className="font-medium text-2xl lg:text-3xl leading-tight">
              {job.companyName}
            </h1>
          )}
          <p className="text-neutral-500">
            {isEditing ? (
              <input
                {...register("jobRole")}
                type="text"
                className="border border-neutral-300 rounded-lg py-2 px-4 w-full"
              />
            ) : (
              <span>{job.jobRole}</span>
            )}
          </p>
        </div>
        {isEditing ? (
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-fit">
            <button
              onClick={() => onSubmit()}
              className="flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer w-full sm:w-fit"
            >
              <Pencil className="size-5" />
              <span>Save</span>
            </button>
            <button
              onClick={() => cancelHandler()}
              className="flex items-center gap-2 py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer w-full sm:w-fit"
            >
              <span>Cancel</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-fit">
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer w-full sm:w-fit"
            >
              <Pencil className="size-5" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => deleteHandler(id)}
              className="flex items-center gap-2 text-red-500 border border-red-200 hover:bg-red-100 hover:border-red-300 transition-colors py-2 px-4 rounded-lg cursor-pointer w-full sm:w-fit"
            >
              <Trash2 className="size-5" />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4">
        <p className="capitalize text-neutral-500">
          Status:{" "}
          {isEditing ? (
            <select
              {...register("jobStatus")}
              className="border border-neutral-300 text-black rounded-full py-1 px-3 w-full"
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          ) : (
            <span
              className={`${statusStyles[job.jobStatus]} py-1 px-3 ml-1 rounded-full`}
            >
              {job.jobStatus}
            </span>
          )}
        </p>
        <p className="capitalize text-neutral-500">
          Priority:{" "}
          {isEditing ? (
            <select
              {...register("jobPriority")}
              className="border border-neutral-300 text-black rounded-full py-1 px-3 w-full"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          ) : (
            <span
              className={`${priorityStyles[job.jobPriority]} py-1 px-3 ml-1 rounded-full`}
            >
              {job.jobPriority}
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default SingleJobMeta;
