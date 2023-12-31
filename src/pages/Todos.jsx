import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const Todos = () => {
    const [ todos, setTodos ] = useState([]);
    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => {
                    res.json().then((response) => {
                        setTodos(response);
                    })
                });

                setProgress(100);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => setProgress(0), 200);
            }
        }

        fetchData();
    }, []);

    return <>
        <div className="container">
            <LoadingBar
                color="#f11946" // You can customize the color
                height={1} // You can customize the height
                progress={progress}
            />
            <div className="card mt-2">
                <div className="card-header">
                    Todos
                </div>

                <div className="card-body">
                    <div className="card-responsive">
                        {
                            todos.length ?
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map((item) =>
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <Link
                                                            to={`/todo/${item.id}`}
                                                        >
                                                            {item.completed ? 'Completed' : 'Incomplete'}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                                : 'Fetching please wait....'
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Todos;