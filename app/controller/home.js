'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.apiSuccess('演示数据')
  }
}

module.exports = HomeController;
