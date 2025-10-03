import { useState } from "react";

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
    <div className="max-w-md mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <button onClick={() => setView("register")} className="text-indigo-600 underline">
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginPage;