import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => {
            res.json().then((response) => {
                setTodos(response);
            })
        });
    }, []);

    return <>
        <div className="container">
            <div className="card mt-2">
                <div className="card-header">
                    Todos
                </div>

                <div className="card-body">
                    <div className="card-responsive">
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
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Todos;