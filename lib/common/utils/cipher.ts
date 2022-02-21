import crypto from 'crypto';

export function decrypt(encrypted: string, secret: string) {
  const key = crypto.scryptSync(secret, 'yeah', 32);
  const iv = new Buffer(16);

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  decipher.update(encrypted, 'hex', 'utf-8');

  return decipher.final('utf-8');
}
