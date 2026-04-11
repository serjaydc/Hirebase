import React from "react";
import UserInfo from "../components/profile/UserInfo";

import ProfileJobStats from "../components/profile/ProfileJobStats";
import PlanInfo from "../components/profile/PlanInfo";

const Profile = () => {
  return (
    <section className="container mx-auto max-w-5xl">
      <h1 className="font-medium text-2xl lg:text-3xl leading-tight mb-4">
        Profile Settings
      </h1>
      <UserInfo />
      <ProfileJobStats />
      <PlanInfo />
    </section>
  );
};

export default Profile;
