
import React from 'react';
import {
    Switch, Route
} from 'react-router-dom';
import asyncComponent from 'src/routes/asyncComponent';
import routerConfig from 'src/routes/config';

export default function ContentRoutes() {
    return (
        <Switch>
            {
                routerConfig().map((item) => !!item.show && (
                    <Route
                        key={item.link}
                        exact
                        component={asyncComponent(item.component)}
                        path={item.link}
                    />
                ))
            }
            <Route

                exact
                component={asyncComponent(() => import('src/pages/notFound'))}
                path="/*"
            />
        </Switch>
    );
}


