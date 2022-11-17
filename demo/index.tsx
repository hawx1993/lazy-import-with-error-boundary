import React from 'react';
import { render } from 'react-dom';
import { lazyEntrance } from '../src';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

enum PATH_NAME {
  ROOT = '/',
  APPLICATION = '/application',
}

const Apps = lazyEntrance(
  () =>
    import(
      /* webpackChunkName: "page.onlineScripting" */
      /* webpackPrefetch: true */
      /* webpackPreload: true */ './app'
    ),
);

const DemoComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path={PATH_NAME.ROOT} exact component={Apps} />
        {/* <Route path={PATH_NAME.APPLICATION} component={Application} /> */}
      </Switch>
    </Router>
  );
};
export default DemoComponent;

render(<DemoComponent />, document.getElementById('root'));
