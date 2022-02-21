import crypto from 'crypto';

export function decrypt(encrypted: string, key: string) {
  const iv = crypto.randomBytes(8).toString('hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  decipher.update(encrypted, 'base64', 'utf-8');

  return decipher.final('utf-8');
}
