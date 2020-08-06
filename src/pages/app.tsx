import * as React from 'react';
import { Link } from 'react-router-dom';
import ContentRoutes from 'src/routes/index';
import routerConfig from 'src/routes/config';

export default class App extends React.Component {
  onChange = () => { };

  render() {
      return (
          <div className="zpony_city">
              <div className="zpony_nav">
                  <nav className="zpony_nav_wrap clearfix">
                      <ul className="zpony_nav_list fl clearfix">
                          {
                              routerConfig().map((item) => !!item.show && (
                                  <li className="zpony_nav-item fl" key={item.link}><Link to={item.link}>{item.title}</Link></li>
                              ))
                          }
                      </ul>
                      <div className="fr">

                      </div>
                  </nav>
              </div>
              <div className="zpony-wrap">
                  <ContentRoutes />
              </div>
          </div>
      );
  }
}
