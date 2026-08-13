          // app/login/page.tsx

"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
          
const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setError("");
  setSuccess("");
  setLoading(true);

  try {
    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    // Temporary frontend test
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setSuccess("Login form submitted successfully.");

    console.log("Login Data:", formData);

  } catch (error) {
    console.error("Login Error:", error);

    setError(
      "Something went wrong. Please try again."
    );

  } finally {
    setLoading(false);
  }
};
  

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-blue-700">
            Industrial Workforce
          </h1>

          <p className="text-gray-500 mt-2">
            Secure Login Portal
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />

            </div>

          </div>

          <div>

            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-3"
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>

          </div> 
                    <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">

              <input
                type="checkbox"
                className="rounded border-gray-300"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-300 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />

        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      Logging in...
    </>
  ) : (
    "Login"
  )}
</button>

          <div className="relative">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-3 text-gray-500">
                OR
              </span>
            </div>

          </div>

          <button
            type="button"
            className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold"
          >
            Login with Mobile OTP
          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-sm text-gray-500">
            Industrial Workforce Management System
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Version 1.0.0
          </p>

        </div>

      </div>

    </div>

  );

}
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white">
              IW
            </span>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue to your Industrial Dashboard
          </p>
        </div>

        {/* Error Message */}
        {error && (
  <div className="rounded-lg bg-red-100 border border-red-300 p-3 mb-4">
    <p className="text-red-600 text-sm">
      {error}
    </p>
  </div>
)}

        {success && (
  <div className="rounded-lg bg-green-100 border border-green-300 p-3 mb-4">
    <p className="text-green-600 text-sm">
      {success}
    </p>
  </div>
)}

        {/* Loading Button Example */}
        <button
          type="button"
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-90"
              fill="currentColor"
              d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z"
            />
          </svg>

          Loading...
        </button>

        {/* Footer */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-xs text-gray-500">
            Industrial Workforce Management System
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Version 1.0.0
          </p>

          <p className="text-xs text-gray-400 mt-1">
            © 2026 All Rights Reserved
          </p>
        </div>
                <div className="flex items-center justify-center gap-2 mt-5">
            <span className="h-px w-12 bg-gray-200"></span>

            <span className="text-xs text-gray-400">
              Secure Access
            </span>

            <span className="h-px w-12 bg-gray-200"></span>
          </div>
               <button
            type="button"
            onClick={() => {
              setError("");
              setSuccess(
                "Mobile OTP login will be available soon."
              );
            }}
            className="w-full mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors py-3 rounded-lg font-semibold"
          >
            Login with Mobile OTP
          </button>
               <div className="mt-5 rounded-lg bg-slate-50 border border-slate-200 p-3">
            <p className="text-xs text-center text-slate-500">
              Your account information is protected by
              secure authentication.
            </p>
          </div>
              <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Industrial Workforce Management System
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Version 1.0.0
          </p>

          <p className="text-xs text-gray-400 mt-1">
            © 2026 All Rights Reserved
          </p>
        </div>

