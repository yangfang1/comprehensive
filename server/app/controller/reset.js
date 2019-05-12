'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async findList() {
    const { ctx } = this;
    ctx.set('Content-Type', 'application/json');
    const data = await ctx.service.test.findList();
    this.ctx.body = {
      errorNum: 0,
      masg: 'news list success',
      data,
    };

  }
}

module.exports = TestController;
