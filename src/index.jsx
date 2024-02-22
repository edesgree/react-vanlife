import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HostLayout from "./components/HostLayout";
import Layout from './components/Layout';
import './index.css';
import About from "./pages/About";
import Home from "./pages/Home";
import HostDashboard from "./pages/host/HostDashboard";
import HostIncome from "./pages/host/HostIncome";
import HostReviews from "./pages/host/HostReviews";
import VanDetail from "./pages/vans/VanDetail";
import Vans from "./pages/vans/Vans";
import "./server";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />

                    <Route path="/host" element={<HostLayout />}>
                        <Route index element={<HostDashboard />} />
                        <Route path="/host/income" element={<HostIncome />} />
                        <Route path="/host/reviews" element={<HostReviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);