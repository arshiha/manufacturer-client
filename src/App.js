import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Blog from "./Pages/Blog/Blog.js";
import About from "./Pages/About/About.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
