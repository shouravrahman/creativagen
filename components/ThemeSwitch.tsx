"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, SunMoon } from "lucide-react"; // Replace with your actual icon library imports

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block text-left mx-2" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center rounded-full outline-none border-none text-accent focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open options</span>
          <SunMoon className="w-8 h-8" />
        </button>
      </div>

      {dropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              className={`text-gray-700  px-4 py-2 text-sm w-full text-left flex items-center ${
                theme === "system" ? "bg-gray-100" : ""
              }`}
              role="menuitem"
              tabIndex={-1}
              onClick={() => setTheme("system")}
            >
              <Monitor className="w-5 h-5 mr-2" /> System
            </button>
            <button
              className={`text-gray-700  px-4 py-2 text-sm w-full text-left flex items-center ${
                theme === "dark" ? "bg-gray-300" : ""
              }`}
              role="menuitem"
              tabIndex={-1}
              onClick={() => setTheme("dark")}
            >
              <Moon className="w-5 h-5 mr-2" /> Dark
            </button>
            <button
              className={`text-gray-700  px-4 py-2 text-sm w-full text-left flex items-center ${
                theme === "light" ? "bg-gray-100" : ""
              }`}
              role="menuitem"
              tabIndex={-1}
              onClick={() => setTheme("light")}
            >
              <Sun className="w-5 h-5 mr-2" /> Light
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
