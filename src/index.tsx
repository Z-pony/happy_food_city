// import dva from 'dva';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import promiseFinally from 'promise.prototype.finally';
import AllPage from 'src/pages';

const stores = { };

promiseFinally.shim();
ReactDOM.render(
    (
        // <AppContainer>
        //     <Router>
        //         <Provider {...stores}>
        //             <AllPage />
        //         </Provider>
        //     </Router>
        // </AppContainer>
        <AllPage />

    )
    , document.getElementById('root')
);

