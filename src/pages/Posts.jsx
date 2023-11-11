import { Button } from 'react-bootstrap';
import { useParams, Link, useSearchParams } from 'react-router-dom';

const Posts = () => {
    const params = useParams();
    
    const [ searchParms, setSearchParms ] = useSearchParams();

    const setState = () => {
        setSearchParms({state:"up", city:"noida"});
    }

    return <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <a href="#">Post #{params.id}</a>
                    <span>{ params.slug }</span>
                    <Button variant='success' onClick={setState}>Set State</Button>
                </div>

                <div className="card-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia beatae ipsam? Ipsa, impedit vel similique exercitationem, dolorum rem vitae ad pariatur quasi ratione tenetur! Aspernatur voluptas veniam repellat ullam ut quos, culpa delectus officia ab, harum optio vitae debitis maxime!
                </div>

                <div className="card-footer">
                    <Link to="/">Go to Home</Link>
                </div>
            </div>
        </div>
    </>
};

export default Posts;