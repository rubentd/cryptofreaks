import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from 'containers/Home';
import Catalogue from 'containers/Catalogue';
import Dashboard from 'containers/Dashboard';
import MonsterContainer from 'containers/MonsterContainer';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from 'components/Layout';
import 'milligram/dist/milligram.css'
import 'styles/App.less';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalogue" component={Catalogue} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/monster/:monsterID" component={MonsterContainer} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
