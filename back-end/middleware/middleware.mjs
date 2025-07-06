// シンプルなリクエストロガー
export default function logger(req, res, next) {
  const { method, originalUrl } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${originalUrl}`);
  next();
}
