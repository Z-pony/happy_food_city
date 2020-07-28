import * as React from 'react';
import { Spin } from 'antd';


// 按需载入包装组件
const asyncComponent = (importComponent) => {
    class AsyncComponent extends React.Component<any, any> {
        constructor(T: any) {
            super(T);
            this.state = {
                'component': null
            };
        }

        componentDidMount() {
            importComponent().then((Component ) => {
                this.setState({
                    'component': Component.default
                });
            });
        }

        render() {
            let C = this.state.component;

            return C ? <C /> : <Spin spinning />;
        }
    }
    return AsyncComponent;
};


export default asyncComponent;

