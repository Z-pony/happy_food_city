import dva from 'dva';
import { createBrowserHistory } from 'history';

const app = dva({
    'history': createBrowserHistory()
});

app.router(require('./pages').default);

app.start('#root');

