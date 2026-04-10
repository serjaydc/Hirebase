import { Funnel, Search } from "lucide-react";
import React from "react";
import { useJobStore } from "../../store/jobStore";

const JobsFilter = () => {
  const { search, status, setSearch, setStatus } = useJobStore();
  return (
    <section className="bg-white p-4 rounded-lg border border-neutral-200 mb-4">
      <div className="flex items-center justify-between gap-4">
        <form className="w-full">
          <div className="flex items-center gap-1 border border-neutral-300 p-2 rounded-lg">
            <Search className="text-neutral-500 size-5" />
            <input
              type="text"
              placeholder="Search by company or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full placeholder:text-neutral-500 outline-none"
            />
          </div>
        </form>
        <div className="border border-neutral-300 p-2 rounded-lg flex items-center gap-2">
          <Funnel className="text-neutral-500 size-5" />
          <select
            name=""
            id=""
            className=" outline-none appearance-none cursor-pointer"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="applied" className="p-2">
              Applied
            </option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default JobsFilter;
