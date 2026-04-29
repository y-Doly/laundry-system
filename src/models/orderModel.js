const store = { orders: [] };

function generateId() {
  return 'ORD' + Math.floor(Math.random() * 100000);
}

exports.createOrder = (req, res) => {
  const { customerName, phone, items } = req.body;

  let total = 0;
  items.forEach(item => {
    total += item.qty * item.price;
  });

  const order = {
    id: generateId(),
    customerName,
    phone,
    items,
    total,
    status: "RECEIVED",
    createdAt: new Date()
  };

  store.orders.push(order);
  res.json(order);
};

exports.getOrders = (req, res) => {
  let result = store.orders;

  if (req.query.status) {
    result = result.filter(o => o.status === req.query.status);
  }

  if (req.query.phone) {
    result = result.filter(o => o.phone.includes(req.query.phone));
  }

  res.json(result);
};

exports.updateStatus = (req, res) => {
  const order = store.orders.find(o => o.id === req.params.id);

  if (!order) return res.status(404).send("Order not found");

  order.status = req.body.status;
  res.json(order);
};

exports.getDashboard = (req, res) => {
  const totalOrders = store.orders.length;
  const totalRevenue = store.orders.reduce((sum, o) => sum + o.total, 0);

  const statusCount = {};
  store.orders.forEach(o => {
    statusCount[o.status] = (statusCount[o.status] || 0) + 1;
  });

  res.json({ totalOrders, totalRevenue, statusCount });
};