import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainPage from './pages/mainPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import sideNavigation from './sideNavigation';
import loginModal from './loginModal';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/modal' exact component={loginModal} />
        <Route path='/' exact component={mainPage} />
        <Route path='/side' exact component={sideNavigation} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
