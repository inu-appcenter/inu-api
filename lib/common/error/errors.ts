import BadRequest from './preset/BadRequest';
import Unauthorized from './preset/Unauthorized';
import InternalServerError from './preset/InternalServerError';

export const InvalidParameters = BadRequest.of(
  'invalid_parameters',
  '요청 파라미터에 문제가 있습니다.'
);

export const InvalidCredentials = Unauthorized.of(
  'invalid_credentials',
  '학번과 비밀번호를 확인해주세요.'
);

export const DatabaseFailure = InternalServerError.of(
  'database_failure',
  '데이터베이스 연결에 문제가 생겼습니다!'
);
