// import os from 'object-serialize'
import param from 'object-param'

import { message } from 'antd';

export default new class {
    create(name, methods) {
        this.DB(name,methods);
    }
    DB(name,methods) {
        for (let method in methods) {
            const config = methods[method];
            if(!this[name])this[name] = [];
            this[name][method] = query => new Request(config, query, method);
        }
        return this;
    }
}

function Request(config,body) {

    let {url,method = ''} = config;
    const option = {
      credentials: 'same-origin',
    };
    if(method.toUpperCase() === 'POST'){
      Object.assign(option, {
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          method: 'post',
          body: JSON.stringify(body)
      })
    }else{
      url += `?${param(body)}`
    }

    return new Promise((resolve, reject) => {
        fetch(url, option).then(data => data.json()).then(({success,data,...err}) => {
            if (success) {
                resolve(data)
            } else {
                reject({
                  ...err
                })
            }
        }).catch(()=>{
            message.error('请求失败')
            reject({
              errorMsg:'请求失败',
            })
        })
    })
}
