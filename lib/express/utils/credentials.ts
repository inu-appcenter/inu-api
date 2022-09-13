import {ParsedQs} from 'qs';
import {IncomingHttpHeaders} from 'http';

export function extractCredentials(query: ParsedQs, headers: IncomingHttpHeaders) {
  if (query['studentId'] != null && query['password'] != null) {
    const {studentId, password} = query;
    return {studentId, password};
  }

  if (headers.authorization != null && headers.authorization.startsWith('Basic ')) {
    return extractBasicAuth(headers.authorization);
  }

  return null;
}

function extractBasicAuth(authorization: string) {
  try {
    const encoded = authorization.split(' ')[1];
    const decoded = Buffer.from(encoded, 'base64').toString();

    const [studentId, ...passwordFragments] = decoded.split(':');

    return {studentId, password: passwordFragments.join(':')};
  } catch (e) {
    return null;
  }
}
