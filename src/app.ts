import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/config';
import router from './routers/user.routes';

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: [config.cors_origin],
    credentials: true,
  })
);

app.use(helmet());

app.use('/users', router);


export default app;
