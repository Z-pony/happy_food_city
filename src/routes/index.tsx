
import React, { PureComponent } from 'react';
import { Route, Switch } from 'dva/router';
import asyncComponent from 'src/routes/asyncComponent';
import routerConfig from 'src/routes/config';

export default class ContentRoutes extends PureComponent {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                />
                {
                    routerConfig().map((item) => !!item.show && (
                        <Route
                            key={item.link}
                            component={asyncComponent(item.component)}
                            exact
                            path="/"
                        />
                    ))
                }
            </Switch>
        );
    }
}


