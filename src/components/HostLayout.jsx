import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    const activeLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };
    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }) => isActive ? activeLinkStyle : null}
                >Dashboard</NavLink>
                <NavLink
                    to="/host/income"
                    style={({ isActive }) => isActive ? activeLinkStyle : null}

                >Income</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeLinkStyle : null}
                    to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
}