// import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <img src={logo} alt="Verba Logo" />
            <a to="/" className="nav-link">
              <span className="link-text">Verba</span>
            </a>
          </li>
          <li className="nav-item">
            <a to="/" className="nav-link active">
              <i className="bi-house-door-fill"></i>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a to="/saved" className="nav-link">
              <i className="bi-bookmark"></i>
              <span className="link-text">Saved</span>
            </a>
          </li>
          <li className="nav-item">
            <a to="/settings" className="nav-link">
              <i className="bi-gear"></i> 
              <span className="link-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
