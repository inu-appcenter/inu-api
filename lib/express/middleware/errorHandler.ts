import HttpError from '../../common/error/preset/base/HttpError';
import {serializeError} from 'serialize-error';
import {ErrorRequestHandler} from 'express';

export function errorHandler(): ErrorRequestHandler {
  return (err, req, res, _ /** 파라미터 4개 없으면 작동 안함! */) => {
    if (isHttpError(err)) {
      console.log(`HTTP 에러가 발생했습니다: ${JSON.stringify(err.responseBody)}`);

      return res.status(err.statusCode).json(err.responseBody);
    } else {
      const serialized = JSON.stringify(serializeError(err));

      console.log(`처리되지 않은 에러가 발생했습니다: ${serialized}`);

      return res.status(500).json({
        statusCode: 500,
        error: 'unhandled',
        message: serialized,
      });
    }
  };
}

function isHttpError(error: Error): error is HttpError {
  return error instanceof HttpError;
}
