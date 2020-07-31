import * as React from 'react';
import {
    BrowserRouter, Route, HashRouter, Switch
} from 'react-router-dom';
import ContentRoutes from 'src/routes/index';
import Publish from 'src/pages/publish/index';

export default class App extends React.Component {
  onChange = () => { };

  render() {
      return (
          <div className="zpony_city">
              <div className="zpony_nav">
                  <nav className="zpony_nav_wrap">

                  </nav>
              </div>
              <div className="zpony-wrap">
                  <ContentRoutes />
                  {/* <Switch>
                      <Route
                          component={Publish}
                          exact
                          path="/publish"
                      />

                  </Switch> */}
              </div>
          </div>
      );
  }
}
