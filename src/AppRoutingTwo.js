import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Taskdashboard from './pages/dashboard/TaskDashboard';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// import Settings from './settings/Settings';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */

const AppRoutingTwo = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/registro" component={ RegisterPage } />
        <Route exact path="/dashboard" component={Taskdashboard} />
    </BrowserRouter>
  );
};

export default AppRoutingTwo;