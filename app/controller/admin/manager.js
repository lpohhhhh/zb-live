'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  // 创建管理员
  async create() {
    const { ctx } = this;
    await ctx.render('admin/manager/create.html');
  }
  // 创建管理员逻辑
  async save() {
    const { ctx, app } = this;

    let { username, password } = ctx.request.body;
  }
}

module.exports = ManagerController;
