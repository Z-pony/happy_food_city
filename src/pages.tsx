import * as React from 'react';
import {
    BrowserRouter, Route, HashRouter, Switch
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import APP from 'src/pages/app';
import 'src/styles/index.less';
// import { SmileTwoTone } from 'x@ant-design/icons';
// import { Button } from 'antd';index

// import "src/assets/css/app.less";


export default function RouterConfig() { // 路由配置
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    component={APP}
                    path="/"
                />
            </Switch>
        </BrowserRouter>
    );
}
