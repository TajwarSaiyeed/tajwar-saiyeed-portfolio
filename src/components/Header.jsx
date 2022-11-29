import React from "react";
import Nav from "./Nav";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Header;
