import { useEffect, useState } from "react";

export default function Settings() {
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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
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
              <a href="#" className="accent-color default"></a>
              <a href="#" className="accent-color orange"></a>
              <a href="#" className="accent-color pink"></a>
              <a href="#" className="accent-color purple"></a>
              <a href="#" className="accent-color gray"></a>
              <a href="#" className="accent-color green"></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
