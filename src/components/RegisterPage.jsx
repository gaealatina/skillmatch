import React, { useState } from 'react';
import { BookOpen, Clipboard } from 'lucide-react';

export default function RegisterPage({ setView }) {
  const [accountType, setAccountType] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, accountType);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-[Poppins]">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-blue-900 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 h-full">
              <div className="flex items-center space-x-2 h-full">
                <img src="src/assets/logo.png" alt="SkillMatch Logo" className="h-12 w-12 object-contain self-center" />
                <span className="text-xl font-poppins self-center">SkillMatch</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView("landing")} 
                className="text-white hover:text-teal-200 transition-colors font-[Poppins]"
              >
                Back to home
              </button>
              <button 
                onClick={() => setView("login")} 
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded transition-colors font-[Poppins]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-[Poppins]">Create your account</h1>
            <p className="text-gray-600 text-xs font-[Poppins]">Join SkillMatch to build better teams</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
                  First name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-8 font-[Poppins]"
                    required
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
                  Last name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-8 font-[Poppins]"
                    required
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-8 font-[Poppins]"
                  required
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-8 font-[Poppins]"
                    required
                    minLength="8"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-8 font-[Poppins]"
                    required
                    minLength="8"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-[Poppins]">At least 8 characters</p>

            {/* Account Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 font-[Poppins]">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAccountType('student')}
                  className={`p-6 border-2 rounded-lg transition-all ${
                    accountType === 'student'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <BookOpen className="w-10 h-10 mx-auto mb-2 text-teal-500" />
                  <div className="font-semibold text-gray-900 font-[Poppins]">Student</div>
                  <div className="text-xs text-gray-600 mt-1 font-[Poppins]">Join & track skills</div>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('educator')}
                  className={`p-6 border-2 rounded-lg transition-all ${
                    accountType === 'educator'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Clipboard className="w-10 h-10 mx-auto mb-2 text-teal-500" />
                  <div className="font-semibold text-gray-900 font-[Poppins]">Educator</div>
                  <div className="text-xs text-gray-600 mt-1 font-[Poppins]">Manage classes & students</div>
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-600 font-[Poppins]">
                I agree to the{' '}
                <a href="#" className="text-teal-500 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-teal-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded transition-colors font-[Poppins]"
            >
              Create account
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 font-[Poppins]">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={() => setView("login")} 
                className="text-teal-500 hover:underline font-medium bg-transparent border-none cursor-pointer font-[Poppins]"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}