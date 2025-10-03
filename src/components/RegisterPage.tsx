import { FC, useState } from "react";

interface Props {
  setView: (view: "landing" | "register" | "login") => void;
}

const RegisterPage: FC<Props> = ({ setView }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "freelancer",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", form);
  };

  return (
    <div className="max-w-md mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
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
        <select
          name="role"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="freelancer">Freelancer</option>
          <option value="educator">Educator</option>
        </select>
        <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <button onClick={() => setView("login")} className="text-indigo-600 underline">
          Login here
        </button>
        <button
          onClick={() => setView("landing")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        ></button>
      </p>
    </div>
  );
};

export default RegisterPage;
