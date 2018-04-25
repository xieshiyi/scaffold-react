import React, {Component} from 'react'
import {HashRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import DB from '@DB'
import Exception from '@comp/Exception'
import './DemoPage.css'

class DemoPage extends Component {
	constructor(props) {
        super(props);
		this.state = {
			
		}
    }
    componentDidMount() {
      
    }

	render() {
		return (
			// demo展示500错误页
			<Exception type="500" style={{ minHeight: 500, height: '80%' }}/>
		)
	}
}

export default DemoPage
