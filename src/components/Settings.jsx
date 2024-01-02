import { useCallback, useEffect, useState } from "react";

export default function Settings() {
  // Accent
  const [accentColor, setAccentColor] = useState("default");

  useEffect(() => {
    const storedAccentColor = localStorage.getItem("accentColor");
    if (storedAccentColor) {
      setAccentColor(storedAccentColor);
    }
  }, []);
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

  // Persisting the theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDarkTheme") === "true") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
  }, [isDarkTheme]);

  const setAccentColorPreference = (color) => {
    setAccentColor(color);
    localStorage.setItem("accentColor", color);
  };

  return (
    <>
      <main>
        <section className="content">
          <div className="settings">
            <h1>Settings</h1>
            <h2 className="settings-title" id="themes">
              Themes
            </h2>
            <div className="themepref">
              <label htmlFor="toggle">Night Mode</label>
              <label htmlFor="toggle" className="toggle">
                <input
                  title="Theme"
                  name="theme"
                  id="toggle"
                  type="checkbox"
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
                <span className="slider"></span>
              </label>
            </div>
            <h2 className="settings-title" id="accent">
              Accent Color
            </h2>
            <div className="accent-colors">
              <a
                href="#"
                onClick={() => setAccentColorPreference("default")}
                className="accent-color default"
              ></a>
              <a
                href="#"
                onClick={() => setAccentColorPreference("orange")}
                className="accent-color orange"
              ></a>
              <a
                href="#"
                onClick={() => setAccentColorPreference("pink")}
                className="accent-color pink"
              ></a>
              <a
                href="#"
                onClick={() => setAccentColorPreference("purple")}
                className="accent-color purple"
              ></a>
              <a
                href="#"
                onClick={() => setAccentColorPreference("gray")}
                className="accent-color gray"
              ></a>
              <a
                href="#"
                onClick={() => setAccentColorPreference("green")}
                className="accent-color green"
              ></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
