"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const NEXT_PUBLIC_BE_API_URL = process.env.NEXT_PUBLIC_BE_API_URL;

interface CustomError {
  response?: {
    data: {
      message: string;
    };
  };
}

interface Errors {
  [key: string]: string;
}

const UserRegister: React.FC = () => {
  const router = useRouter();
 
  const formFields = ["name", "email", "phone", "dob", "password", "confirmPassword"] as const;
  type FormField = typeof formFields[number];

  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({  [name]: "Please enter all valid values" });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    const { name, email, phone, dob, password, confirmPassword } = formData;

    if (!name) newErrors.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Valid email is required.";
    if (!phone || !/^[0-9]{10}$/.test(phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!dob) newErrors.dob = "Date of birth is required.";
    if (new Date().getFullYear() - new Date(dob).getFullYear() < 13)
      newErrors.dob = "You must be at least 13 years old.";
    if (!password || password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      const errorMessage = Object.values(errors).join(", ");
      toast.error(errorMessage);
      return;
    }

    try {
      await axios.post(
        `${NEXT_PUBLIC_BE_API_URL}/auth/user_register/`,
        formData
      );

      toast.success("Account created successfully!")
      setTimeout(() => {
        router.push("/user/login");
      }, 3000);
    } catch (error: unknown) {
      if (error && (error as CustomError).response) {
        const errorMessage =
          (error as CustomError).response?.data?.message || "Something went wrong. Please try again.";
          toast.error(errorMessage)
        } else {
          toast.error("Something went wrong. Please try again.")
        }
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen flex items-center justify-center p-4">
      <div className="w-full glass-card max-w-md rounded-2xl shadow-2xl p-8">
        <div className="flex justify-center mb-8">
          <Image 
            src="/galaxy-of-ai-logo.png" 
            alt="Galaxy Of AI Logo" 
            width={200} 
            height={100} 
            className="logo-hover"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field} className="mb-4">
              <label 
                className="block text-gray-300 mb-2 text-sm"
              >
                {field === "dob"
                  ? "Date of Birth"
                  : field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type={
                  field === "dob"
                    ? "date"
                    : field.includes("password")
                    ? "password"
                    : "text"
                }
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={`Enter your ${
                  field === "dob" ? "date of birth" : field
                }`}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffab40]"
              />
              {errors[field] && (
                <small className="text-red-500 text-xs mt-1 block">
                  {errors[field]}
                </small>
              )}
            </div>
          ))}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-black font-semibold py-3 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 glow-effect"
          >
            Sign Up
          </button>
        </form>
     
        <p className="text-center text-gray-300  font-semibold mt-6">
          Already have an account? 
          <a 
            href="/user/login" 
            className="text-blue-400 ml-2 hover:underline"
          >
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;