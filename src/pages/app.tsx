import * as React from 'react';
import ContentRoutes from 'src/routes/index';

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
              </div>
          </div>
      );
  }
}
