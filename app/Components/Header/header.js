"use client"; // Required for using hooks like useState
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaTimes, FaBars } from "react-icons/fa";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check system preference on component mount
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(systemPrefersDark);
    document.body.classList.toggle("dark-mode", systemPrefersDark);
    document.body.classList.toggle("light-mode", !systemPrefersDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    document.body.classList.toggle("light-mode", !newMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Mahmoud Nabil</Link>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="#introduction" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="#about" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#skills" onClick={toggleMenu}>
          Skills
        </Link>
        <Link href="#contact" onClick={toggleMenu}>
          Contact
        </Link>
        <button onClick={toggleDarkMode} className={styles.toggleButton}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
