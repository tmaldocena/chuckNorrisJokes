import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';


const LoginPage = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useHistory();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if(user){
            navigate.push('/dashboard');
        }
    });

    useEffect(() => {
        if(credentials){
            const c = JSON.stringify(credentials);
            localStorage.setItem('user', c);
            navigate('/dashboard');
        }
    });


    return (
        <div>
            <h1>Login Page!</h1>
            <LoginFormik onSubmit={(e) => setCredentials(e)}></LoginFormik>
            <Link to='/registro'>Registrarse</Link>
        </div>
    );
}

export default LoginPage;
