import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap-icons.min.css";
import Home from "./components/Home.jsx";
import Settings from "./components/Settings.jsx";
import Navbar from "./components/Navbar.jsx";
import Bookmarks from "./components/Bookmarks.jsx";

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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={Bookmarks} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </BrowserRouter>
    </>
  );
}