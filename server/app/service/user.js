'use strict';
// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async findList() {
    const { ctx } = this;
    return ctx.model.User.find();
  }
  async findUserInfo(id) {
    const { ctx } = this;
    return ctx.model.UserInfo.find({ id_number: id });
  }
}
module.exports = UserService;
