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
                <li><NavLink className={classNameFunc}  to="/post/what-is-react/14">Posts</NavLink></li>
            </ul>
        </>
    );
};

export default NavBar;