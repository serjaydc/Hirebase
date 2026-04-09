import React from "react";
import { Briefcase, CalendarCheck, ChartColumn, Trophy } from "lucide-react";

const HeroTable = () => {
  return (
    <div className="bg-neutral-100 shadow-xl rounded-lg overflow-hidden border border-neutral-300">
      <div className="h-2 w-full bg-linear-to-r from-indigo-400 via-indigo-300 to-indigo-200 " />

      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl text-blue-600 font-semibold mb-1">
                150+
              </h3>
              <Briefcase className="text-blue-600 size-6" />
            </div>
            <p className="text-neutral-600">Applications Tracked</p>
          </div>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl text-green-600 font-semibold mb-1">34</h3>
              <CalendarCheck className="text-green-600 size-6" />
            </div>
            <p className="text-neutral-600">Interviews Scheduled</p>
          </div>
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl text-purple-600 font-semibold mb-1">
                17
              </h3>
              <Trophy className="text-purple-600 size-6" />
            </div>
            <p className="text-neutral-600">Offers Received</p>
          </div>
        </div>
        <div className="bg-neutral-200/50 border border-neutral-200 rounded-lg flex items-center justify-center py-14">
          <ChartColumn className="text-neutral-400/50 size-16 sm:size-20 md:size-24" />
        </div>
      </div>
    </div>
  );
};

export default HeroTable;
