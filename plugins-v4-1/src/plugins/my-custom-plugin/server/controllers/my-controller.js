'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('my-custom-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
