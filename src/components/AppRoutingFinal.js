import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


import HomePage from './pages/home/HomePage';
import PageNotFound from './pages/404/PageNotFound.jsx';
import AboutPage from './pages/faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';
import DashboardPage from './pages/dashboard/DashboardPage';

function AppRoutingFinal() {


  //TODO: Change value from sessionStorage
  let loggedIn = true;

  return (
    <Router>
    {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes  */}
        <Route exact path='/' >
          {
            loggedIn ?
            <Redirect from='/' to='/dashboard' />
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Login route */}
        <Route exact path='/login' component={ LoginPage } />
        {/* DashBoard route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ?
            <DashboardPage></DashboardPage>
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        <Route component={ PageNotFound } />
      </Switch>
    </Router>
  );
}
export default AppRoutingFinal; 
