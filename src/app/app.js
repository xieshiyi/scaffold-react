import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { LocaleProvider } from 'antd'
import Home from '@pages/Home'
import zhCN from 'antd/lib/locale-provider/zh_CN';
const renders = Component => {
    render(
    	<AppContainer>
    	<LocaleProvider locale={zhCN}>
            <Component/>
  		</LocaleProvider>
  		</AppContainer>, document.getElementById('app'))
       
}

renders(Home)

if (module.hot) {
    module.hot.accept('@pages/Home', () => renders(Home))
}
