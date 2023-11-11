import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="container">
                <h1>About Page</h1>

                <Link to="/">Go to home page</Link>
            </div>
        </>
    );
}

export default About;