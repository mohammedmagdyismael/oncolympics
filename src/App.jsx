// index.js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Groups from './views/Groups';
import Matches from './views/Matches';
import Player from './views/Player';
import Moderator from './views/Moderator';
import knockouts from './views/knockouts';
import Landing from './views/LandingV2';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/groups" component={Groups} />
        <Route path="/knockouts" component={knockouts} />
        <Route path="/schedule" component={Matches} />
        <Route path="/yourmatch" component={Player} />
        <Route path="/matchmoderator" component={Moderator} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;