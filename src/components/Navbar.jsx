import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Bookmarks from "./Bookmarks.jsx";
import Settings from "./Settings.jsx";
import logo from "../assets/images/logo.png";
import WordPage from "./WordPage.jsx";


export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <img src={logo} alt="Verba Logo" />
              <Link element="true" title="Home" to="/" className="nav-link">
                <span className="link-text">Verba</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link element="true" title="Home" to="/" className="nav-link active">
                <i className="bi-house-door-fill"></i>
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link element="true" title="Save" to="/saved" className="nav-link">
                <i className="bi-bookmark"></i>
                <span className="link-text">Saved</span>
              </Link>
            </li>
            <li className="nav-item hidden">
              <Link element="true" title="Word Search" to="/word/:word" className="nav-link">
                <i className="bi-x"></i>
                <span className="link-text">Saved</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link element="true" title="Settings" to="/settings" className="nav-link">
                <i className="bi-gear"></i>
                <span className="link-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/word/:word" element={<WordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
