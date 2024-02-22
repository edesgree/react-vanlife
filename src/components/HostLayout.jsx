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
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeLinkStyle : null}
                >Dashboard</NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeLinkStyle : null}

                >Income</NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeLinkStyle : null}

                >Vans</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeLinkStyle : null}
                    to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
}