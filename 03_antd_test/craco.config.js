const CracoLessPlugin = require('craco-less');

/* 
  npm i @craco/craco (6.4.5)
  npm i craco-less  (2.0.0)
  npm i babel-plugin-import  (1.13.5)
*/
module.exports = {
  // 实现自定义主题
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#76B900' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 实现样式按需引入
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true  }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ]
  }
};