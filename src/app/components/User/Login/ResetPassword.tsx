"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const NEXT_PUBLIC_BE_API_URL = process.env.NEXT_PUBLIC_BE_API_URL;


const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isLinkSent, setIsLinkSent] = useState<boolean>(false);

  // Validate email format
  const validateEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail();

    if (isEmailValid) {
      try {
        await axios.post(
          `${NEXT_PUBLIC_BE_API_URL}/auth/reset_password/`,
          { email }, // Request body
          { headers: { "Content-Type": "application/json" } }
        );
        toast.success("Password reset link has been sent to your email.")
       
        setIsLinkSent(true);
      } catch {
        toast.error("Failed to send reset link. Please try again.")
       
      }
    } else {
      toast.error("Please correct the email and try again.")
      
    }
  };

  return (
    

      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen flex items-center justify-center p-4">
        <div className="w-full glass-card max-w-md rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <Image src="/galaxy-of-ai-logo.png" alt="Galaxy Of AI Logo" width={200} height={100} />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-orange-400">Reset Password</h2>

          {!isLinkSent ? (

            <form className="space-y-4 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2 text-sm">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffab40]"
                  required
                />
                {emailError && <small className="text-red-500 text-xs mt-1 block">{emailError}</small>}
              </div>

              <div className="font-semibold text-black-500 bg-gray mx-auto mb-4">
              <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold py-3 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 glow-effect">
                Send Reset Link
              </button>

              </div>
              

            </form>
          ) : (
            
            <p className="text-gray-200 text-xl mt-1 block">
              Password reset link has been sent to your email. Please check your inbox.
            </p>
          )}

          {!isLinkSent && (
            <p className="text-center text-gray-300 font-semibold">
              Remembered your password? <a href="/user/login" className="text-amber-500 ml-2 hover:underline font-semibold">Login Here</a>
            </p>
          )}
        </div>
      </div>
  );
};

export default ResetPassword;
