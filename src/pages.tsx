import * as React from 'react';
import {
    BrowserRouter as Router, Route, Switch, IndexRoute
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import APP from 'src/pages/app';
import 'src/styles/index.less';
// import { SmileTwoTone } from 'x@ant-design/icons';
// import { Button } from 'antd';index

// import "src/assets/css/app.less";
import NotFound from 'src/pages/notFound/index';

export default function RouterConfig() { // 路由配置
    return (
        <Router>

            <Route
                exact
                path="/a"
                component={NotFound}
            >
            </Route>
            <Route
                component={APP}
                exact
                path="/b"
            />


            {/* <Route render={() => <Redirect to={`${prefixPath}/tips`} />} /> */}


        </Router>
    );
}
