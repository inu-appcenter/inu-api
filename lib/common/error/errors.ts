import BadRequest from './preset/BadRequest';
import Unauthorized from './preset/Unauthorized';

export const NotEnoughParameters = BadRequest.of('not_enough_parameters', '인자가 불충분합니다.');

export const InvalidCredentials = Unauthorized.of(
  'invalid_credentials',
  '학번과 비밀번호를 확인해주세요.'
);
