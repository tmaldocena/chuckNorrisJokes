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

function AppRoutingOne() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
  });

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My Task 1'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My Task 2'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'My Task 3'
    }
  ];


  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/error'>| Not Existent Page |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/online-state' component={ StatePage } />
            <Route path='/(about|faqs)' component={ AboutPage } />
            <Route path='/profile' component={ ProfilePage }>
            {
              logged ?
                  <ProfilePage></ProfilePage>
              :
              () => {
                  alert("You must be logged in, redirecting to Login Page...");
                  return (<LoginPage></LoginPage>)
                }
            }
            </Route>
            <Route path='/tasks' component={ TasksPage }/>
            <Route 
            exact 
            path='/task/:id' 
            render= {({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}/>)}
            />
            <Route path='/login' component={ LoginPage }>
              {
                logged ? 
                () => {
                  alert('You are logged in, redirecting to Home Page...');
                  return ( <Redirect to='/'/> );
                }
                :
                () => {
                  return ( <LoginPage></LoginPage> );
                }
              }
            </Route>

            {/* Page Not Found - 404 */}
            <Route component={ PageNotFound } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default AppRoutingOne; 
