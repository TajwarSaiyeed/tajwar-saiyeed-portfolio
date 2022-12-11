import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : `bg-slate-200`}>
      <div className="dark:bg-slate-800 min-h-screen px-5 sm:px-10 md:px-32 overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
