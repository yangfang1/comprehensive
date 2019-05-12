/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556184498433_3189';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  exports.mongoose = {
    url: 'mongodb://127.0.0.1/graduation',
    // 链接到本地的MongoDB，demo是我本地数据库的名字，根据自己数据库名字进行填写即可
    options: {},
  };
  exports.security = {
    csrf: false,
    domainWhiteList: [ 'http://localhost:8080' ],
    authWhiteList: [ '/api', '/api/login', '/api/login/register' ],
  };
  return {
    ...config,
    ...userConfig,
  };
};
