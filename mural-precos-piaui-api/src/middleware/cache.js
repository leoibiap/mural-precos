import NodeCache from 'node-cache';

const ttl = parseInt(process.env.CACHE_TTL_SECONDS || '300', 10);
const cache = new NodeCache({ stdTTL: ttl });

export default function cached(keyBuilder) {
  return (req, res, next) => {
    try {
      const key = keyBuilder(req);
      const cached = cache.get(key);
      if (cached) return res.json(cached);
      const originalJson = res.json.bind(res);
      res.json = (body) => {
        cache.set(key, body);
        return originalJson(body);
      };
      next();
    } catch (err) {
      next();
    }
  };
}
