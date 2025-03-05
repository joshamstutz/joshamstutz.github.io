import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Resumé from "./pages/Resumé/Resumé";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home className="home-page" />} />
                    <Route path="/projects" element={<Projects className="projects-page" />} />
                    <Route path="/contact" element={<Contact className="contact-page" />} />
                    <Route path="/resumé" element={<Resumé className="resume-page" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
