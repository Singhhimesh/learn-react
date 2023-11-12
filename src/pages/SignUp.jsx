import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SignUp = () => {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [ formErrors, setFormErrors ] = useState({
        username: '',
        email: '',
        password: '',
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };

        // Validate username
        if (formData.username.trim() === '') {
            newErrors.username = 'Username is required';
            valid = false;
        } else {
            newErrors.username = '';
        }

        // Validate email
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        } else {
            newErrors.email = '';
        }

        // Validate password
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        } else {
            newErrors.password = '';
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [ name ]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Add your signup logic here, for example, make an API request to register the user
            console.log('Form submitted with data:', formData);
            // Reset the form after submission
            setFormData({
                username: '',
                email: '',
                password: '',
            });
        }
    };

    return (
        <div className='container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        Register
                    </div>
                    <div className="card-body">
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                className='form-control'
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red' }}>{formErrors.username}</span>
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                className='form-control'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red' }}>{formErrors.email}</span>
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                className='form-control'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red' }}>{formErrors.password}</span>
                        </label>
                        <br />
                        <Button variant='info' className="mt-2" type="submit">Sign Up</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
