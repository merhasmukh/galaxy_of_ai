"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { signIn, getSession } from "next-auth/react";

interface CustomError {
  response?: {
    data: {
      message: string;
    };
  };
}

const UserLogin: React.FC = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/user/dashboard" });
  
      if (result?.error) {
        toast.error("Google login failed. Please try again.");
      } else {
        toast.success("Google Signed in successfully! Redirecting...");
        const session = await getSession();
          if (session?.userData) {
            localStorage.setItem("user", JSON.stringify(session.userData));
          }
      } 
      
    }catch (error) {
      console.error("Google login error:", error);
      toast.error("An unexpected error occurred. Please try again."); 
     
  }};


  

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

  const validatePassword = (): boolean => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const togglePasswordVisibility = (): void => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
       
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json(); // Extract JSON response
        
        if (!response.ok) {
          const errorMessage = data.error || "Login failed. Please try again.";
          toast.error(errorMessage);
          throw new Error(errorMessage);
        }
        const { userData } = data;
    
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success("Signed in successfully! Redirecting...");

        setTimeout(() => {
          window.location.href = "/user/dashboard";
        }, 2000);

      } catch (error: unknown) {
        if (error && (error as CustomError).response) {
          const errorMessage =
            (error as CustomError).response?.data?.message || "Login failed. Please try again.";
          toast.error(errorMessage)
        } else {
          toast.error("An unexpected error occurred please try again")
        }
      }
    } else {
      toast.error("An unexpected error occurred please try again")
    }

    
  };

  return (
   

      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md  glass-card rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <Image 
              src="/galaxy-of-ai-logo.png" 
              alt="Galaxy Of AI Logo" 
              width={200} 
              height={100} 
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label 
                className="block text-gray-300 mb-2 text-sm"
              >
                Email Address <span className="text-red-500">*</span>
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

            <div className="mb-4">
              <label 
                className="block text-gray-300 mb-2 text-sm"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 pr-10 bg-gray-800 text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffab40]"
                  required
                />
                <span 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#ffab40]" 
                  onClick={togglePasswordVisibility}
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                </span>
              </div>
              {passwordError && <small className="text-red-500 text-xs mt-1 block">{passwordError}</small>}
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-black font-semibold py-3 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Sign In
            </button>
            <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mt-3 bg-green-300 text-black font-semibold py-3 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Image src="/tech/svg/google_logo.svg" height={24} width={24} alt="Google Logo" className="w-6 h-6" />
            Sign in with Google
          </button>

          </form>
          <div className="mt-6 text-center font-semibold text-gray-300">
            Don&apos;t have an account?
            <Link href="/user/register">
              <span className="text-blue-400 font-semibold ml-2 hover:underline cursor-pointer">
                Sign Up Here
              </span>
            </Link>
          </div>
          <div className="mt-2 text-center font-semibold text-gray-300">
              Forgot Password? 
              <Link 
                href="/user/reset-password" 
                className="text-blue-400 font-semibold ml-2 hover:underline mb-2"
              >
                Reset Password
              </Link>
          </div>
        </div>
      </div>
  );
};

export default UserLogin;