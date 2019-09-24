const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = { server: 'iplc-hk1.crhnode.top', port: 540, secret: 'ddf5c322081360e73b40db06ea6539f7f2' }
};

app.use(main);
app.listen(3000);
