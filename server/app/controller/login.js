'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async findList() {
    const { ctx } = this;
    ctx.set('Content-Type', 'application/json');
    const data = await ctx.service.user.findList();
    const user = ctx.request.body;
    const userId = ctx.session.userId;
    const databaseUser = data.filter(item => {
      return item.get('role') === user.role && item.get('id_number') === user.name;
    });
    if (userId) {
      this.ctx.body = {
        errorNum: 0,
        isLogin: false,
        msg: '已登录，请退出重新登录或者跳转主页',
      };
    } else if (databaseUser.length === 0) {
      this.ctx.body = {
        errorNum: 0,
        isLogin: false,
        msg: '该用户不存在,请重新输入账号密码',
      };
    } else {
      if (databaseUser[0].password === user.password) {
        this.ctx.session.userId = databaseUser[0]._id;
        this.ctx.session.id_number = databaseUser[0].get('id_number');
        this.ctx.body = {
          errorNum: 0,
          isLogin: true,
          role: user.role,
          info: databaseUser[0],
          msg: '登录成功',
        };
      } else {
        this.ctx.body = {
          errorNum: 0,
          isLogin: false,
          msg: '密码输入错误,请重新登录',
        };
      }
    }
  }
  async loginout() {
    const { ctx } = this;
    ctx.set('Content-Type', 'application/json');
    this.ctx.session.userId = null;
    ctx.body = {
      errorNum: 0,
      isLogin: false,
      info: {},
      msg: '退出成功',
    };
  }
}

module.exports = LoginController;
