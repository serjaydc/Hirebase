import React from "react";
import { useAuthStore } from "../../store/authStore";

const UserInfo = () => {
  const { user } = useAuthStore();
  const {
    firstName,
    lastName,
    username,
    plan,
    planExpiresAt,
    email,
    createdAt,
  } = user;

  const memberSince = new Date(createdAt).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
  const userLogo = username.charAt(0).toUpperCase();

  return (
    <div className="bg-white border border-neutral-300 rounded-xl p-4 flex gap-4 mb-4">
      <div className="bg-linear-120 from-indigo-600 via-indigo-500 to-indigo-400 px-6 py-4 rounded-full h-fit w-fit">
        <p className="text-2xl text-white font-semibold">{userLogo}</p>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div>
              <p className="font-medium text-2xl">
                {firstName} {lastName}
              </p>
              <p className="text-neutral-500">{email}</p>
            </div>
          </div>
          <button className="py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer">
            Edit Profile
          </button>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className=" text-lg font-medium capitalize">
                Account Type: {plan}
              </h3>

              <p className="text-neutral-500">
                {planExpiresAt
                  ? `Plan expires on ${planExpiresAt}`
                  : "There is no current membership plan"}
              </p>
            </div>
            <button className="py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer">
              View Plan
            </button>
          </div>
        </div>
        <div className="bg-neutral-200/60 p-4 rounded-lg">
          <p className="text-black/80">Member since {memberSince}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
