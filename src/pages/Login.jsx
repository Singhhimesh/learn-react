import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const changeEventHandle = (e) => {
        const { name, value } = e.target;

        setLoginFormData({
            ...loginFormData,
            [ name ] : value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(loginFormData);

        setLoginFormData({
            username: '',
            email: '',
            password: '',
        });
    }

    useEffect(() => {
        setLoginFormData({
            username: 'suraj.kashyap370',
            email: 'suraj.kashyap370@webkul.in',
            password: 'surajsingh@123'
        });
    }, []);

    return <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Login
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input 
                            type="email"
                            name="email"
                            className="form-control mt-2"
                            placeholder="Email"
                            value={loginFormData.email}
                            onChange={changeEventHandle}
                            required
                        /> 

                        <input 
                            type="text"
                            name="username"
                            className="form-control mt-2"
                            placeholder="Usename"
                            value={loginFormData.username}
                            onChange={changeEventHandle}
                            required
                        /> 

                        <input
                            type="text"
                            name="password"
                            className="form-control mt-2"
                            placeholder="Password"
                            value={loginFormData.password}
                            onChange={changeEventHandle}
                            required
                        />

                        <Button 
                            type="submit"
                            variant="info"
                            className="mt-2"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default Login;