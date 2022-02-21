import express from 'express';

export function asyncHandler(handler: express.RequestHandler) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return Promise.resolve(handler(req, res, next)).catch(next);
  };
}
