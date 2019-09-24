const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = { server: '45.92.124.97', port: 5003, secret: '7ia26nLk5DC6eKUzIOF1JpBzMy5hbWF6b25hd3MuY29t' }
};

app.use(main);
app.listen(3000);
