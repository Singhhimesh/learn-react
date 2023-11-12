import { NavLink } from "react-router-dom";
import '../index.css';

const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

const NavBar = () => {
    return (
        <>
            <ul className="navBar">
                <li><NavLink className={classNameFunc}  to="/">Home</NavLink></li>
                <li><NavLink className={classNameFunc}  to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink className={classNameFunc}  to="/about">About Us</NavLink></li>
                <li><NavLink className={classNameFunc}  to="/todos">Todos</NavLink></li>
                <li><NavLink className={classNameFunc}  to="/login">Login</NavLink></li>
                <li><NavLink className={classNameFunc}  to="/register">Register</NavLink></li>
            </ul>
        </>
    );
};

export default NavBar;