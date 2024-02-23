
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./components/AuthRequired";
import HostLayout from "./components/HostLayout";
import Layout from './components/Layout';
import './index.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from './pages/NotFound';
import HostDashboard from "./pages/host/HostDashboard";
import HostIncome from "./pages/host/HostIncome";
import HostReviews from "./pages/host/HostReviews";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVans from "./pages/host/HostVans";
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
                    <Route element={<AuthRequired />}>
                        <Route path="/host" element={<HostLayout />}>
                            <Route index element={<HostDashboard />} />
                            <Route path="income" element={<HostIncome />} />
                            <Route path="reviews" element={<HostReviews />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVanDetail />} >
                                <Route index element={<HostVanInfo />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);