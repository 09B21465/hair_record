// ダミーデータ（後で DB と置き換え）
let customers = [
  { id: 1, name: 'Taro', email: 'taro@example.com' },
  { id: 2, name: 'Hanako', email: 'hanako@example.com' }
];

// 全顧客取得
export function getAllCustomers(req, res) {
  res.json(customers);
}

// ID で顧客取得
export function getCustomerById(req, res) {
  const id = Number(req.params.id);
  const customer = customers.find(c => c.id === id);
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found.' });
  }
  res.json(customer);
}

// 新規顧客作成
export function createCustomer(req, res) {
  const { name, email } = req.body;
  const newCustomer = { id: Date.now(), name, email };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
}

// 顧客情報更新
export function updateCustomer(req, res) {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const customer = customers.find(c => c.id === id);
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found.' });
  }
  customer.name = name ?? customer.name;
  customer.email = email ?? customer.email;
  res.json(customer);
}

// 顧客削除
export function deleteCustomer(req, res) {
  const id = Number(req.params.id);
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Customer not found.' });
  }
  customers.splice(index, 1);
  res.status(204).end();
}
