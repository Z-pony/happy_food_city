
import React, { Component } from 'react';
// import { Route, Switch } from 'dva/router';
import {
    Switch, Route
} from 'react-router-dom';
import asyncComponent from 'src/routes/asyncComponent';
import routerConfig from 'src/routes/config';


export default class ContentRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="
                    /"
                />

                {
                    routerConfig().map((item) => !!item.show && (
                        <Route
                            key={item.link}
                            component={asyncComponent(item.component)}
                            exact
                            link={item.link}
                        />
                    ))
                }

            </Switch>
        );
    }
}


