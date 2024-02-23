
import { Link, NavLink } from 'react-router-dom';
import iconLogin from '../assets/images/avatar-icon.png';
export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife!</Link>
            <nav>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active-link" : null}

                >About</NavLink>
                <NavLink
                    to="/host"
                    className={({ isActive }) => isActive ? "active-link" : null}
                >Host</NavLink>
                <NavLink
                    to="/vans"
                    className={({ isActive }) => isActive ? "active-link" : null}
                >Vans</NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "active-link" : null}
                ><img src={iconLogin} className='login-icon' /></NavLink>
            </nav>
        </header>
    );
}