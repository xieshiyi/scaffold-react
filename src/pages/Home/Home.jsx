import React, {Component} from 'react'
import {HashRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import DB from '@DB'
import './Home.css'
import Loadable from 'react-loadable'
const loading = () => <p>loading...</p>

// 为了解决页面js太大，加载慢的展示问题
const PageOne = Loadable({
    loader: () => import('@pages/PageOne'),
    loading,
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
      
    }

    render() {
        return (
        <div>
            <HashRouter>
                {/* 内容区域 */}
                <Route
                    exact
                    path="/"
                    component={PageOne}
                />
            </HashRouter>
        </div>
        )
    }
}

export default Home