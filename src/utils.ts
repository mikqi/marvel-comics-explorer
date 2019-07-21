import crypto from 'crypto'

export const timestamp = () => {
  const now = Date.now() / 1000
  const ts = parseInt(`${now}`, 10)

  return ts
}

export const createHash = (ts: number, privkey: string, pubkey: string) => {
  const preHash = ts + privkey + pubkey
  const hash = crypto.createHash('md5').update(preHash).digest('hex');

  return hash;
};

export const handleError = (fn: any) => (...params: any) => fn(...params).catch((err: any) => console.error(`'Woops: ${err}`))
