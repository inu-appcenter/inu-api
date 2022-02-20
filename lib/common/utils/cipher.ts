import crypto from 'crypto';

export function decrypt(encrypted: string, key: string) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, null);
  decipher.update(encrypted, 'base64', 'utf-8');

  return decipher.final('utf-8');
}
