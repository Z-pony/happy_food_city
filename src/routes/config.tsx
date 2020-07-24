export const prefixPath = '/';
export default () => [
    {
        'link':`${prefixPath}`,
        'title': '首页',
        'component': () => import('src/pages/home'),
        'show': true
    },
    {
        'link':`${prefixPath}publish`,
        'title': '首页',
        'component': () => import('src/pages/publish'),
        'show': true
    },
    {
        'link':`${prefixPath}city`,
        'title': '同城',
        'component': () => import('src/pages/city'),
        'show': true
    }
];
