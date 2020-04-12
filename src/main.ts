import * as Express from 'express';

const app = Express();
const port = 3000;
app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world.');
});

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

export default app;
