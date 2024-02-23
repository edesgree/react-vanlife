import { Navigate, Outlet } from 'react-router-dom';
export default function Footer() {


    const authenticated = false;
    if (!authenticated) {
        return <Navigate to="/login" state={{ message: "You must log in first" }} />;
    }
    return (
        <Outlet />
    );
}