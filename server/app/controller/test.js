'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async findList() {
    // console.log(this.ctx.service.user.findUserList())
    // let ret = await this.ctx.service.user.findUserList()
    // this.ctx.body = ret
    const { ctx } = this;
    this.ctx.body = await ctx.service.test.findList();

  }
}

module.exports = TestController;
