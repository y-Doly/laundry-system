const API = "http://localhost:3000";

// Add item row
function addItem() {
  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Type (Shirt)">
    <input type="number" placeholder="Qty">
    <input type="number" placeholder="Price">
  `;

  document.getElementById("items").appendChild(div);
}

// Create Order
async function createOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const itemDivs = document.getElementById("items").children;

  let items = [];

  for (let div of itemDivs) {
    const inputs = div.getElementsByTagName("input");

    items.push({
      type: inputs[0].value,
      qty: Number(inputs[1].value),
      price: Number(inputs[2].value)
    });
  }

  const res = await fetch(`${API}/orders`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      customerName: name,
      phone,
      items
    })
  });

  const data = await res.json();
  alert("Order Created: " + data.id);

  loadOrders();
  loadDashboard();
}

// Load Orders
async function loadOrders() {
  const phone = document.getElementById("filterPhone").value;
  const status = document.getElementById("filterStatus").value;

  let url = `${API}/orders?`;

  if (phone) url += `phone=${phone}&`;
  if (status) url += `status=${status}`;

  const res = await fetch(url);
  const orders = await res.json();

  const tbody = document.querySelector("#ordersTable tbody");
  tbody.innerHTML = "";

  orders.forEach(o => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${o.id}</td>
      <td>${o.customerName}</td>
      <td>${o.phone}</td>
      <td>${o.total}</td>
      <td>${o.status}</td>
      <td>
        <select onchange="updateStatus('${o.id}', this.value)">
          <option ${o.status === 'RECEIVED' ? 'selected' : ''}>RECEIVED</option>
          <option ${o.status === 'PROCESSING' ? 'selected' : ''}>PROCESSING</option>
          <option ${o.status === 'READY' ? 'selected' : ''}>READY</option>
          <option ${o.status === 'DELIVERED' ? 'selected' : ''}>DELIVERED</option>
        </select>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// Update Status
async function updateStatus(id, status) {
  await fetch(`${API}/orders/${id}/status`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ status })
  });

  loadOrders();
  loadDashboard();
}

// Load Dashboard
async function loadDashboard() {
  const res = await fetch(`${API}/orders/dashboard`);
  const data = await res.json();

  document.getElementById("totalOrders").innerText = data.totalOrders;
  document.getElementById("totalRevenue").innerText = data.totalRevenue;

  document.getElementById("statusData").innerText =
    JSON.stringify(data.statusCount);
}

// Initial Load
loadOrders();
loadDashboard();