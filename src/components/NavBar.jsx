import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove the "dark" class on the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
