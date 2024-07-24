// index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Groups from './views/Groups';
import Standings from './views/Standings';
import CurrentMatch from './views/CurrentMatch';
import Moderator from './views/Moderator';

const App = () => {
  return (
<Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/groups" component={Groups} />
        <Route path="/standings" component={Standings} />
        <Route path="/currentmatch" component={CurrentMatch} />
        <Route path="/matchmoderator" component={Moderator} />
        {/* Other routes can be added here */}
      </Switch>
    </Router>
  );
}

export default App;