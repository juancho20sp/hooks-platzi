import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Routes from '../routes';
import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound,
} from '../../containers';
import { Layout } from '../../components';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={Routes.home.path} component={Home}></Route>
          <Route exact path={Routes.checkout.path} component={Checkout}></Route>
          <Route
            exact
            path={Routes.information.path}
            component={Information}
          ></Route>
          <Route exact path={Routes.payment.path} component={Payment}></Route>
          <Route exact path={Routes.success.path} component={Success}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
