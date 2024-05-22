import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

const port = Number.parseInt(process.argv[2]);

router.get('/hello', ctx => {
  ctx.body = 'Hello Docker';
});

app //
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port);
