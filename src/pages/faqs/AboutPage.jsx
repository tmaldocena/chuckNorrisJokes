import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in the route: ', location.pathname); //? About/FAQs

    const navigate = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={ () => navigate('/')}>
                    Go to Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
