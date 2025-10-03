import { useState } from "react";
import "../LoginPage.css";

const LoginPage = ({ setView }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", form);
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-blue-900 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 h-full">
              <img src="src/assets/logo.png" alt="SkillMatch Logo" className="h-12 w-12 object-contain self-center" />
              <span className="text-xl font-poppins self-center">SkillMatch</span>
            </div>
            <button onClick={() => setView("landing")} className="back_btn">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="login-center-wrapper">
        <div className="login-card fixed top-20">
          <h2 className="welcome">Welcome Back </h2>
          <h5 className="welcome_p">Sign in to your SkillMatch account</h5>
          <form onSubmit={handleSubmit} className="email_password_form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="email_input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="password_input"
            />
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Remember me
              </label>
              <button id="btn_password">Forgot Password</button>
            </div>
            <button className="login_btn">
              Login
            </button>
            <div className="text">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="other_methods">
              <div>
                <a href="#" className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  <i data-feather="github" className="h-7 w-5"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <div>
                <a href="#" className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  <i data-feather="google" className="h-7 w-5"></i>
                  <span>Google</span>
                </a>
              </div>
            </div>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <button onClick={() => setView("register")} className="register_btn">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;