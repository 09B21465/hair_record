import { Router } from 'express';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from './controll.mjs';

const router = Router();

// 顧客一覧取得
router.get('/customers', getAllCustomers);

// 顧客詳細取得
router.get('/customers/:id', getCustomerById);

// 顧客新規作成
router.post('/customers', createCustomer);

// 顧客情報更新
router.put('/customers/:id', updateCustomer);

// 顧客削除
router.delete('/customers/:id', deleteCustomer);

export default router;
