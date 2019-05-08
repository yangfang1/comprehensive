'use strict';
// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async findList() {
    const { ctx } = this;
    return ctx.model.Test.find();
  }
}
module.exports = UserService;
