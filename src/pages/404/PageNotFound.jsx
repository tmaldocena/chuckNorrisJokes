import React from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => navigateTo('/')}>
                Go Back Home
            </button>
        </div>
    );
}

export default PageNotFound;
