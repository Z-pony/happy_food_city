import dva from 'dva';
// import createhistory from 'history/createBrowserHisto
import { createBrowserHistory } from 'history';
// const customHistory = createBrowserHistory();
const app = dva({
    'history': createBrowserHistory()
});

app.router(require('./router').default);

app.start('#root');

