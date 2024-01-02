// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Bookmarks from "./components/Bookmarks.jsx";
import Settings from "./components/Settings.jsx";
import "./bootstrap-icons.min.css";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Settings />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
