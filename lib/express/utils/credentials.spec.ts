import {extractCredentials} from './credentials';

describe('요청에서 인증 정보 꺼내오기', () => {
  it('쿼리 파라미터에 들어 있는 경우', async () => {
    const query = {
      studentId: '201701562',
      password: 'haha:@!',
    };

    const extracted = extractCredentials(query, {});

    expect(extracted).toBeTruthy();
    expect(extracted?.studentId).toBe('201701562');
    expect(extracted?.password).toBe('haha:@!');
  });

  it('Authorization 헤더에 들어 있는 경우', async () => {
    const authorization = `Basic ${Buffer.from('201701562:haha:@!').toString('base64')}`;

    const extracted = extractCredentials({}, {authorization});

    expect(extracted).toBeTruthy();
    expect(extracted?.studentId).toBe('201701562');
    expect(extracted?.password).toBe('haha:@!');
  });
});
