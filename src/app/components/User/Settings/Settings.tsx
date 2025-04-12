"use client";

import React, { useState,useEffect } from "react";
import Image from "next/image";

const UserSettings = () => {
  const [name, setName] = useState("John Doe");
  const [image, setImage] = useState("/galaxy-of-ai-logo.png");
  const [preview, setPreview] = useState(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      // In real-world, also upload to server here
    }
  };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
        
            const parsed = JSON.parse(storedUser);
            setName(parsed.name)
            setImage("/galaxy-of-ai-logo.png")
            
        }
    }, []);
  const handleSave = () => {
    // Save logic (API call)
    console.log("Saved:", { name, image: preview });
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 p-8 max-w-md w-full text-white">
        <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">User Settings</h2>

        <div className="flex flex-col items-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src={preview}
              alt="Profile Picture"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
