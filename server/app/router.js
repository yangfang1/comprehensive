'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user/info', controller.user.getUserLogin);
  router.post('/api/login', controller.login.findList);
  router.get('/api/loginout', controller.login.loginout);
};
