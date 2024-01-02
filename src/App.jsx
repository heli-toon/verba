import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Settings from "./components/Settings.jsx";
import "./bootstrap-icons.min.css";
import Navbar from "./components/Navbar.jsx";
import Bookmarks from "./components/Bookmarks.jsx";

export default function App() {
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
