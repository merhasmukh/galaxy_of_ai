"use client";

import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const NEXT_PUBLIC_BE_API_URL = process.env.NEXT_PUBLIC_BE_API_URL;


interface ResetPasswordPageProps {
  uid:string;
  token: string;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ uid,token }) => {
  const router = useRouter();

  // State variables
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isValidToken, setIsValidToken] = useState<boolean>(true);

  // Verify token on component mount
  useEffect(() => {
    if (token) {
      axios
        .post(`${NEXT_PUBLIC_BE_API_URL}/auth/verify_reset_token/`, { token,uid })
        .then(() => {
          setIsValidToken(true);
        })
        .catch(() => {
          setIsValidToken(false);
          toast.error("Invalid or expired reset token.")
         
        });
    }
  }, [token,uid]);

  // Validate passwords
  const validatePasswords = (): boolean => {
    if (!newPassword || newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return false;
    } else if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = validatePasswords();
    if (isValid && isValidToken) {
      try {
        await axios.post(
          `${NEXT_PUBLIC_BE_API_URL}/auth/reset_password_confirm/`,
          { token, newPassword ,uid},
          { headers: { "Content-Type": "application/json" } }
        );
        toast.success("Password successfully updated. You can now log in.")
       

        setTimeout(() => {
          router.push("/user/login");
        }, 3000);
      } catch {
        toast.error("Failed to reset password. Please try again.")
       
      }
    } else {
      toast.error( "Please fill the form correctly and try again.")

    }
  };

  return (
  

      <div className="min-h-screen bg-gradient-to-b from-orange-500/10 via-purple-500/5 to-transparent flex items-center justify-center p-4">
        <div className="w-full max-w-md glass-card rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-orange-400">Reset Your Password</h2>
          {isValidToken ? (
            <form className="space-y-4 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2 text-sm">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffab40]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffab40]"

                  required
                />
              </div>

              {passwordError && <small className="text-red-500 text-xs mt-1 block">{passwordError}</small>}

              <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold py-3 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 glow-effect">Reset Password</button>
            </form>
          ) : (
            <p>Invalid or expired reset token. Please try again.</p>
          )}

         
        </div>
      </div>
  );
};

export default ResetPasswordPage;
