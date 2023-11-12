import { Link, Outlet } from 'react-router-dom';
 
const Contact = () => {
    return(
        <>
            <div className="container">
                <h1>Contact Us</h1>
                <Link to="/">Go to home</Link> <br />
                <Link to="company">Company</Link>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default Contact;