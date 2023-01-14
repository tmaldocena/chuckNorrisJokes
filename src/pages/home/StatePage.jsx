import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    console.log('location: ', location.state.online);  //* State sent 
    console.log('location search: ', location.search);  //* Query params sent

    return (
        <div>
            <h1>User state: {location.state.online ? 'Online' : 'Offline'}</h1>
        </div>
    );
}

export default StatePage;
