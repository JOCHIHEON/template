import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainPage from './pages/mainPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import sideNavigation from './sideNavigation';

import mainFreeboard from './pages/mainFreeboard';
import mainFanboard from './pages/mainFanboard';
import mainQnA from './pages/mainQnA';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={mainPage} />
        <Route path='/board/free' exact component={mainFreeboard} />
        <Route path='/board/fan/1' component={mainFanboard} />
        <Route path='/board/fan/2' component={mainFanboard} />
        <Route path='/board/fan/3' component={mainFanboard} />
        <Route path='/board/fan/4' component={mainFanboard} />
        <Route path='/board/fan/5' component={mainFanboard} />
        <Route path='/board/fan/6' component={mainFanboard} />
        <Route path='/board/fan/7' component={mainFanboard} />
        <Route path='/board/fan/8' component={mainFanboard} />
        <Route path='/board/fan/9' component={mainFanboard} />
        <Route path='/board/fan/10' component={mainFanboard} />
        <Route path='/board/qna' exact component={mainQnA} />
        { /*
        <Route path="/board/free" component={FreeBoard}/>
        <Route path="/board/fan" component={FanBoard}/>
        <Route path="/teamlist/" component={TeamList}/>
        <Route path="/teamlist/teammenu" component={TeamMenu}/>
        <Route path="/team/1" component={TeamInfo}/>
        <Route path="/teamlist/teammenu/teammember" component={TeamMember}/>
        <Route path="/teamlist/teammenu/teamrecorde" component={TeamRecode}/>
        <Route path="/teamlist/teammenu/teamschedule" component={TeamSchedule}/>
        <Route path="/board/free" component={MainFreeBoard}/>
        <Route path="/board/free" component={FreeBoard}/>
        <Route path="/board/fan" component={MainFanBoard}/>
        <Route path="/board/fan" component={FanBoard}/>
        <Route path="/teammatchmenu" component={TemaMatchMenu}/>
        <Route path="/teammatchmenu/teammatchrecord" component={TeamMatchRecord}/>
        <Route path="/teammatchmenu/teammatchrecordview" component={TeamMatchRecordView}/>
        <Route path="/teammatchmenu/teammatchranking" component={TeamMatchRanking}/>
         */ }
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
