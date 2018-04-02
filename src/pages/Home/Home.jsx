import React, {Component} from 'react'
import {HashRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import DB from '@DB'
import './Home.css'

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
		主页面
		</div>
		)
	}
}

export default Home
