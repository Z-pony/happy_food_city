import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import PropTypes from 'prop-types';
import Home from 'src/pages/home/index';
// import { SmileTwoTone } from 'x@ant-design/icons';
// import { Button } from 'antd';

// import "src/assets/css/app.less";


export default function RouterConfig({ history }) { // 路由配置
    return (
        <Router history={history}>
            <Switch>
                <Route
                    component={Home}
                    exact
                    path="/"
                />
            </Switch>
        </Router>
    );
}
