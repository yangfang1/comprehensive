'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async findStudentInfo() {
    const { ctx } = this;
    ctx.set('Content-Type', 'application/json');
    const id_number = ctx.session.id_number;
    const data = await ctx.service.user.findUserInfo(id_number);
    this.ctx.body = {
      errorNum: 0,
      data: data[0],
    };
    // const databaseUser = data.filter(item => {
    //   return item.get('role') === user.role && item.get('id_number') === user.name;
    // });
    // if (userId) {
    //   this.ctx.body = {
    //     errorNum: 0,
    //     isLogin: false,
    //     msg: '已登录，请退出重新登录或者跳转主页',
    //   };
    // } else if (databaseUser.length === 0) {
    //   this.ctx.body = {
    //     errorNum: 0,
    //     isLogin: false,
    //     msg: '该用户不存在,请重新输入账号密码',
    //   };
    // } else {
    //   console.log(databaseUser);
    //   console.log(databaseUser[0].password);
    //   if (databaseUser[0].password === user.password) {
    //     console.log(databaseUser[0]._id);
    //     this.ctx.session.userId = databaseUser[0]._id;
    //     this.ctx.body = {
    //       errorNum: 0,
    //       isLogin: true,
    //       role: user.role,
    //       info: databaseUser[0],
    //       msg: '登录成功',
    //     };
    //   } else {
    //     this.ctx.body = {
    //       errorNum: 0,
    //       isLogin: false,
    //       msg: '密码输入错误,请重新登录',
    //     };
    //   }
    // }
  }
}

module.exports = LoginController;
