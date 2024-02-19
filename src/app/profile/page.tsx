"use client";

import * as React from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import InputField from "@/components/forms/InputField";
import Button from "@/components/buttons/Button";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="bg-white shadow-sm rounded-lg py-2 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-10">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold py-2 border-b">
          Edit Profile
        </h3>
        <form className="flex flex-col py-8 gap-4">
          <InputField htmlFor="profile-username" label="username" />
          <InputField htmlFor="profile-phone" label="phone number" type="tel" />
          <InputField htmlFor="profile-old-password" label="old password" />
          <InputField htmlFor="profile-new-password" label="new password" />
          <Button className="w-fit flex items-center mt-8 gap-2">
            Edit Profile
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
}
