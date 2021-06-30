import 'reflect-metadata';
import '@shared/typeorm';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';
import AppErrors from '@shared/erros/AppErrors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
  if (error instanceof AppErrors) {
    return resp.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return resp.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });

  next();
});

app.listen(3333, () =>
  console.log('server start on port http://localhost:3333/ =D'),
);
