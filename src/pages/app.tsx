import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentRoutes from 'src/routes/index';
import routerConfig from 'src/routes/config';
import cs from 'classnames';

export default function App(props) {
    const [ isLogin, setIsLogin ] = useState(false);
    const [ path, setPath ] = useState('/');

    useEffect(() => {
        const linkArr: string[] = routerConfig().map((item) => item.link);
        const pathName: string = props.history.location.pathname;

        if (linkArr.indexOf(pathName) > -1) {
            console.log(pathName);
            setPath(pathName);
        } else {
            setPath('/');
            props.history.push('/');
        }
    });
    return (
        <div className="zpony_city">
            <div className="zpony_nav">
                <nav className="zpony_nav_wrap clearfix">
                    <ul className="zpony_nav_list fl clearfix">
                        {
                            routerConfig().map((item) => !!item.show && (
                                <li
                                    className={
                                        cs({
                                            'zpony_nav_item': true,
                                            'fl': true,
                                            'is_checked':  item.link === path
                                        })
                                    }
                                    key={item.link}
                                >
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="fr zpony_login_box">
                        {
                            isLogin ? <span>未登录</span> : (
                                <span className="zpony_login_btn">登录</span>
                            )
                        }
                    </div>
                </nav>
            </div>
            <div className="zpony_wrap">
                <ContentRoutes />
            </div>
        </div>
    );
}
