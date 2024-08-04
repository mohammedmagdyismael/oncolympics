// index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Groups from './views/Groups';
import Matches from './views/Matches';
import Player from './views/Player';
import Moderator from './views/Moderator';
import knockouts from './views/knockouts';

const App = () => {
  return (
<Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/groups" component={Groups} />
        <Route path="/knockouts" component={knockouts} />
        <Route path="/matches" component={Matches} />
        <Route path="/currentmatch" component={Player} />
        <Route path="/matchmoderator" component={Moderator} />
        {/* Other routes can be added here */}
        <Redirect to="/groups" />
      </Switch>
    </Router>
  );
}

export default App;