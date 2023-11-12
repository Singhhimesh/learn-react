import { useLocation, useSearchParams } from "react-router-dom";
const ShowToDo = () => {
    const [params, setParams] = useSearchParams();

    return <>
        <div className="container">
            <h1>Show todo</h1>
        </div>
    </>
};

export default ShowToDo;