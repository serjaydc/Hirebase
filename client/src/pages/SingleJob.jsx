import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useJobStore } from "../store/jobStore";
import SingleJobMeta from "../components/job/SingleJobMeta";
import InfoGrid from "../components/common/JobInfoGrid";
import { CONTACT_INFO_FIELDS, JOB_INFO_FIELDS } from "../utils/jobFields.js";
import { FormProvider, useForm } from "react-hook-form";

const SingleJob = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { selectedJob, getSingleJob, deleteJob, updateJob } = useJobStore();
  const { id } = useParams();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const onSubmit = async (data) => {
    await updateJob(id, data);
    setIsEditing(false);
  };

  useEffect(() => {
    if (id) getSingleJob(id);
  }, [id]);

  useEffect(() => {
    if (selectedJob) {
      reset(selectedJob);
    }
  }, [selectedJob]);

  return (
    <div className="container mx-auto">
      <Link
        to="/dashboard/jobs"
        className="text-neutral-500 flex items-center gap-2 hover:text-black transition-colors text-lg mb-4"
      >
        <MoveLeft />
        <span>Back to Jobs</span>
      </Link>

      <FormProvider {...methods}>
        <SingleJobMeta
          id={id}
          job={selectedJob}
          deleteJob={deleteJob}
          updateJob={updateJob}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          reset={reset}
          onSubmit={handleSubmit(onSubmit)}
        />
        <InfoGrid
          fields={JOB_INFO_FIELDS}
          data={selectedJob}
          isEditing={isEditing}
        />
        <InfoGrid
          fields={CONTACT_INFO_FIELDS}
          data={selectedJob}
          isEditing={isEditing}
        />
      </FormProvider>
      <p className="text-center text-neutral-500">
        {selectedJob.updatedAt &&
        selectedJob.updatedAt !== selectedJob.createdAt
          ? `Updated ${formatDate(selectedJob.updatedAt)}`
          : `Created ${formatDate(selectedJob.createdAt)}`}
      </p>
    </div>
  );
};

export default SingleJob;
