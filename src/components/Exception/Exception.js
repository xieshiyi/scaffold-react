import React, { createElement, Component } from 'react';
import { Button } from 'antd';
import config from './typeConfig';
import './Exception.scss';

class Exception extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linkElement: 'a'
    }

  }
  componentDidMount(){

  }

  render(){
    const { linkElement  } = this.state;
    const { type, title, img, desc, actions } = this.props;
    const pageType = type in config ? type : '404';
    return (
        <div className="exception">
          <div className="imgBlock">
            <div
              className="imgEle"
              style={{ backgroundImage: `url(${img || config[pageType].img})` }}
            />
          </div>
          <div className="content">
            <h1>{title || config[pageType].title}</h1>
            <div className="desc">{desc || config[pageType].desc}</div>
            <div className="actions">
              {actions ||
                createElement(
                  linkElement,
                  {
                    to: '/',
                    href: '/',
                  },
                  <Button type="primary">返回首页</Button>
                )}
            </div>
          </div>
        </div>
      )
    }
}
export default Exception
