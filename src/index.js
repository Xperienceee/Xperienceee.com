import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as ROUTES from "./routes";
import PageAbout from './PageAbout';
import PageLanding from './PageLanding';
import PageProject from './PageProject';
import PageContact from './PageContact';
import PageRegister from './PageRegister';
import PageNotFound from './PageNotFound';
import './style.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from={ROUTES.ROUTE_LANDING} to={ROUTES.ROUTE_HOME} />
          <Route exact path={ROUTES.ROUTE_HOME} component={PageLanding} />
          <Route exact path={ROUTES.ROUTE_ABOUT} component={PageAbout} />
          <Route exact path={ROUTES.ROUTE_PROJECT} component={PageProject} />
          <Route exact path={ROUTES.ROUTE_CONTACT} component={PageContact} />
          <Route exact path={ROUTES.ROUTE_REGISTER} component={PageRegister} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
