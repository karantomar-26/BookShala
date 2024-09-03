"use client";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

export default function CompleteProfile() {
  const { user } = useUser();
  const [name, setName] = useState(user?.firstName || "");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleProfileSubmit = async () => {
    if (!user) return;

    // Update the user's profile with the entered name
    await user.update({
      firstName: name,
    });

    // Handle profile picture upload (custom logic can be added here)
    if (profilePicture) {
      const formData = new FormData();
      formData.append("file", profilePicture);

      // Integrate your file upload solution (e.g., uploading to a cloud storage)
      // Then store the image URL in Clerk’s user metadata or profile image field.
    }

    // Redirect to the profile page without using useRouter
    window.location.href = "/profile";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Real Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-80"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="profilePicture" className="block mb-2 font-medium">
          Profile Picture
        </label>
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files?.[0] || null)}
          className="border p-2 rounded w-80"
        />
      </div>

      <button
        onClick={handleProfileSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Complete Profile
      </button>
    </div>
  );
}
