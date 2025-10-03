import { useState } from "react";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [view, setView] = useState<"landing" | "register" | "login">("landing");

  return (
    <div className="min-h-screen bg-gray-50">
      {view === "landing" && <LandingPage setView={setView} />}
      {view === "register" && <RegisterPage setView={setView} />}
      {view === "login" && <LoginPage setView={setView} />}
    </div>
  );
}

export default App;
