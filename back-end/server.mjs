import express from 'express';
import logger from './middleware.mjs';
import router from './router.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// 共通ミドルウェア
app.use(express.json());  // JSON ボディをパース
app.use(logger);          // 自作ロガー

// ルーティング
app.use('/api', router);

// 404 ハンドリング
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found.' });
});

// グローバルエラーハンドリング
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
