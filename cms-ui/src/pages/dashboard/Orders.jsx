import React from "react";

const orders = [
  {
    id: "ORD-1001",
    customer: "Alice Smith",
    book: "Atomic Habits",
    quantity: 2,
    total: 31.98,
    status: "Delivered",
    date: "2024-07-20",
  },
  {
    id: "ORD-1002",
    customer: "Bob Johnson",
    book: "The Pragmatic Programmer",
    quantity: 1,
    total: 32.50,
    status: "Shipped",
    date: "2024-07-21",
  },
  {
    id: "ORD-1003",
    customer: "Carol Lee",
    book: "Sapiens",
    quantity: 3,
    total: 74.97,
    status: "Processing",
    date: "2024-07-22",
  },
  {
    id: "ORD-1004",
    customer: "David Kim",
    book: "The Alchemist",
    quantity: 1,
    total: 14.99,
    status: "Cancelled",
    date: "2024-07-22",
  },
  {
    id: "ORD-1005",
    customer: "Eva Green",
    book: "Deep Work",
    quantity: 2,
    total: 36.00,
    status: "Delivered",
    date: "2024-07-23",
  },
];

const statusColors = {
  Delivered: "#43e97b",
  Shipped: "#4facfe",
  Processing: "#ffd700",
  Cancelled: "#ff4e50",
};

const Orders = () => {
  // Order summary stats
  const totalOrders = orders.length;
  const delivered = orders.filter(o => o.status === "Delivered").length;
  const shipped = orders.filter(o => o.status === "Shipped").length;
  const processing = orders.filter(o => o.status === "Processing").length;
  const cancelled = orders.filter(o => o.status === "Cancelled").length;

  return (
    <div style={{ padding: "2rem", background: "#181a1b", minHeight: "100vh" }}>
      <h2 style={{ color: '#ffd700', fontWeight: 700, marginBottom: 24, textShadow: '0 2px 8px #0008' }}>Orders</h2>
      <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
        <div style={{ background: '#23272b', borderRadius: 8, padding: 24, minWidth: 160, textAlign: 'center', color: '#fff', boxShadow: '0 2px 8px #0008' }}>
          <div style={{ fontSize: 18, color: '#ffd700', fontWeight: 700 }}>Total Orders</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{totalOrders}</div>
        </div>
        <div style={{ background: '#23272b', borderRadius: 8, padding: 24, minWidth: 160, textAlign: 'center', color: '#fff', boxShadow: '0 2px 8px #0008' }}>
          <div style={{ fontSize: 18, color: '#43e97b', fontWeight: 700 }}>Delivered</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{delivered}</div>
        </div>
        <div style={{ background: '#23272b', borderRadius: 8, padding: 24, minWidth: 160, textAlign: 'center', color: '#fff', boxShadow: '0 2px 8px #0008' }}>
          <div style={{ fontSize: 18, color: '#4facfe', fontWeight: 700 }}>Shipped</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{shipped}</div>
        </div>
        <div style={{ background: '#23272b', borderRadius: 8, padding: 24, minWidth: 160, textAlign: 'center', color: '#fff', boxShadow: '0 2px 8px #0008' }}>
          <div style={{ fontSize: 18, color: '#ffd700', fontWeight: 700 }}>Processing</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{processing}</div>
        </div>
        <div style={{ background: '#23272b', borderRadius: 8, padding: 24, minWidth: 160, textAlign: 'center', color: '#fff', boxShadow: '0 2px 8px #0008' }}>
          <div style={{ fontSize: 18, color: '#ff4e50', fontWeight: 700 }}>Cancelled</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{cancelled}</div>
        </div>
      </div>
      <div style={{ overflowX: 'auto', background: '#23272b', borderRadius: 12, boxShadow: '0 2px 8px #0008', padding: 24 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
          <thead>
            <tr style={{ background: '#23272b', color: '#ffd700', fontWeight: 700 }}>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Order ID</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Customer</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Book</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Quantity</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Total Price</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Status</th>
              <th style={{ padding: 12, borderBottom: '2px solid #ffd700' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: 12 }}>{order.id}</td>
                <td style={{ padding: 12 }}>{order.customer}</td>
                <td style={{ padding: 12 }}>{order.book}</td>
                <td style={{ padding: 12 }}>{order.quantity}</td>
                <td style={{ padding: 12 }}>${order.total.toFixed(2)}</td>
                <td style={{ padding: 12, fontWeight: 700, color: statusColors[order.status] }}>{order.status}</td>
                <td style={{ padding: 12 }}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders; 