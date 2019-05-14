'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async getUserLogin() {
    const { ctx } = this;
    const userId = ctx.session.userId;
    ctx.set('Content-Type', 'application/json');
    if (userId) {
      this.ctx.body = {
        errorNum: 0,
        msg: '登录成功',
        data: {
          isLogin: true,
        },
      };
    } else {
      this.ctx.body = {
        errorNum: 0,
        msg: '未登录',
        data: {
          isLogin: false,
        },
      };
    }
  }
}

module.exports = UserInfoController;
