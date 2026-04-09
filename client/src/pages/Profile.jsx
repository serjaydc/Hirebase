import React from "react";
import UserInfo from "../components/profile/UserInfo";
import ProfileStats from "../components/profile/ProfileStats";

const Profile = () => {
  return (
    <section className="container mx-auto max-w-5xl">
      <h1 className="font-medium text-2xl lg:text-3xl leading-tight mb-4">
        Profile Settings
      </h1>
      <UserInfo />
      <ProfileStats />
    </section>
  );
};

export default Profile;
