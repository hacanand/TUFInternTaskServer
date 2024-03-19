import { Redis } from 'ioredis';
const getRedisUrl = () => {
    if (process.env.VITE_APP_REDIS_URL) {
      return new Redis(process.env.VITE_APP_REDIS_URL);
    }
    throw new Error('REDIS_URL is not defined');
}

export const redis = new Redis(getRedisUrl());

