import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in the route: ', location.pathname); //? /

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', //* Query Param
            state:{
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile') }>
                Go to Profile
            </button>
            <button onClick={() => navigateProps('/online-state') }>
                Go to Page with State / Query params
            </button>
        </div>
    );
}

export default HomePage;
