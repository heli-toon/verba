import { useEffect, useState } from "react";
import "./App.css";
import "./bootstrap-icons.min.css";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [isDarkTheme] = useState(() => {
    const storedValue = localStorage.getItem("isDarkTheme");
    return storedValue;
  });

  const [accentColor] = useState(() => {
    const storedValue = localStorage.getItem("accentColor");
    return storedValue || "default";
  });

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem("accentColor", accentColor);
    document.body.classList.remove(
      "default",
      "orange",
      "pink",
      "purple",
      "gray",
      "green"
    );
    document.body.classList.add(accentColor);
  }, [accentColor]);
  return (
    <>
      <Navbar />
    </>
  );
}