import React from 'react';
import { render } from 'react-dom';
import { lazyEntrance } from '../src';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CustomError } from './error';

enum PATH_NAME {
  ROOT = '/',
  CUSTOM_ERROR_COMPONENT = '/custom-error-component',
}

const CustomErrorComponent = ({ retry }: any) => (
  <CustomError onReload={retry} />
);
const Apps = lazyEntrance(
  () =>
    import(
      /* webpackChunkName: "page.onlineScripting" */
      /* webpackPrefetch: true */
      /* webpackPreload: true */ './app'
    ),
);

const CustomErrorPage = lazyEntrance(
  () =>
    import(
      /* webpackChunkName: "page.onlineScripting" */
      /* webpackPrefetch: true */
      /* webpackPreload: true */ './app'
    ),
  CustomErrorComponent,
);

const DemoComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path={PATH_NAME.ROOT} exact component={Apps} />
        <Route
          path={PATH_NAME.CUSTOM_ERROR_COMPONENT}
          component={CustomErrorPage}
        />
      </Switch>
    </Router>
  );
};
export default DemoComponent;

render(<DemoComponent />, document.getElementById('root'));
