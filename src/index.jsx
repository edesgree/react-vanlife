import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    return (

        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">#VanLife!</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);