import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 60, // 60 requisições por minuto
  standardHeaders: true,
  legacyHeaders: false,
});

export default limiter;
