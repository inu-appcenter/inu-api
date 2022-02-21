import {asyncHandler} from './asyncHandler';
import express, {RequestHandler} from 'express';

export function defineRoute(
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head',
  path: string,
  ...handlers: RequestHandler[]
): express.Router {
  const router = express.Router();

  router[method](path, ...handlers.map((h) => asyncHandler(h)));

  return router;
}
