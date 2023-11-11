import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container">
                <h1>Home Page</h1>
                <p>This is react home page learing always new things. 
                    try to get job in google inc.</p>

                <Link to="/about">Go to About Page</Link>
            </div>
        </>
    );
};

export default Home;