const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

const logger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const log = `${new Date().toISOString()} ${req.method} ${req.url} ${res.statusCode} ${duration}ms\n`;
    fs.appendFileSync(path.join(logsDir, 'access.log'), log);
  });
  next();
};

module.exports = logger;