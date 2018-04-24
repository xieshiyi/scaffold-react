import React, {Component} from 'react'
import {HashRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import DB from '@DB'
import './PageOne.css'

class PageOne extends Component {
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
			第一个demo页面
		</div>
		)
	}
}

export default PageOne
