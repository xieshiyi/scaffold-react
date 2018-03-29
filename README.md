# 前端项目 模板

## 安装
***
项目地址：（`git clone`）
```shell
  git clone 
```

通过`npm`或者`yarn`安装本地服务第三方依赖模块,
```shell
  npm install
```
或者
```shell
  yarn install
```

## 启动(接下来都直接使用yarn，如果习惯npm直接替换掉yarn就可以)
***
##### 启动服务(http://localhost:8084/)
  * 本地起服务打包的js在内存内
```shell
  yarn start
```

##### 发布代码
  * 本打包命令实现多文件打包,打包出来的文件在dist文件中
```shell
  yarn run build:test // 测试环境
  或
  yarn run build:pro  // 正式环境
```

## Explain

### 目录结构 ###
***
<pre>
├── docs                     // 存储项目文档目录，一般采用markdown编辑
├── webpack.config.js        // 构建服务和webpack配置
├── webpack.dev.js           // 开发环境，webpack配置
├── webpack.prod.js          // 生产环境，webpack配置
├── postcss.config.js        // postcss的配置文件，用于解析css,并将前缀添加到CSS规则 
├── dist                     // 项目build目录
├── index.html               // 项目入口文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── app                  // js入口文件夹，打包入口文件夹
│   ├── components           // 各种组件都存放此处
│   ├── db                   // 所有的请求配置放在这个文件夹
│   │   ├── dbFactory.js     // 数据工厂
│   │   └── index.js         // 接口和请求方法文件
│   ├── modules              // 所有的模块文件夹
│   └── pages                // 页面管理文件夹
         ├── ...files        // 所需要的页面文件
         ├── base.css        // 页面中公共的css样式
</pre>