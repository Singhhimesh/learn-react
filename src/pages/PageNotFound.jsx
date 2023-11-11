import { Link } from "react-router-dom";

const PageNotFound = () => {
    return(
        <>
            <div className="container">
                <h1>Page not found</h1> <br />
                <Link to="/">{'<-'} Go to home</Link>
            </div>
        </>
    );
};

export default PageNotFound;