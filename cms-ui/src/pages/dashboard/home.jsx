import React from "react";

export const Home = () => {
  return (
    <div style={{ padding: "2rem", background: "#181a1b", minHeight: "100vh" }}>
      {/* Welcome Section */}
      <div style={{ 
        background: "#212529", 
        padding: "3rem", 
        borderRadius: "12px", 
        color: "#fff", 
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Welcome to Vinish ko E-commerce Website
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Your comprehensive e-commerce management platform. Monitor sales, manage products, and grow your business.
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "1.5rem", 
        marginBottom: "2rem" 
      }}>
        <div style={{ 
          background: "#23272b", 
          padding: "2rem", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          borderLeft: "4px solid #ffd700"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>Total Sales</h3>
              <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffd700", margin: 0 }}>$45,678</p>
              <p style={{ color: "#28a745", fontSize: "0.9rem", margin: "0.5rem 0 0 0" }}>↑ 12% from last month</p>
            </div>
            <div style={{ fontSize: "2.5rem", color: "#ffd700" }}>💰</div>
          </div>
        </div>
        <div style={{ 
          background: "#23272b", 
          padding: "2rem", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          borderLeft: "4px solid #f093fb"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>Orders</h3>
              <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#f093fb", margin: 0 }}>1,234</p>
              <p style={{ color: "#28a745", fontSize: "0.9rem", margin: "0.5rem 0 0 0" }}>↑ 8% from last month</p>
            </div>
            <div style={{ fontSize: "2.5rem", color: "#f093fb" }}>📦</div>
          </div>
        </div>
        <div style={{ 
          background: "#23272b", 
          padding: "2rem", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          borderLeft: "4px solid #4facfe"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>Products</h3>
              <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#4facfe", margin: 0 }}>567</p>
              <p style={{ color: "#28a745", fontSize: "0.9rem", margin: "0.5rem 0 0 0" }}>↑ 15% from last month</p>
            </div>
            <div style={{ fontSize: "2.5rem", color: "#4facfe" }}>🛍️</div>
          </div>
        </div>
        <div style={{ 
          background: "#23272b", 
          padding: "2rem", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          borderLeft: "4px solid #43e97b"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>Customers</h3>
              <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#43e97b", margin: 0 }}>8,901</p>
              <p style={{ color: "#28a745", fontSize: "0.9rem", margin: "0.5rem 0 0 0" }}>↑ 22% from last month</p>
            </div>
            <div style={{ fontSize: "2.5rem", color: "#43e97b" }}>👥</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Quick Actions</h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1rem" 
        }}>
          <button style={{ 
            padding: "1rem", 
            background: "#212529", 
            color: "#ffd700", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            ➕ Add New Product
          </button>
          <button style={{ 
            padding: "1rem", 
            background: "#212529", 
            color: "#f093fb", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            📊 View Analytics
          </button>
          <button style={{ 
            padding: "1rem", 
            background: "#212529", 
            color: "#4facfe", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            📋 Manage Orders
          </button>
          <button style={{ 
            padding: "1rem", 
            background: "#212529", 
            color: "#43e97b", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            👥 Customer Support
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div style={{ 
        background: "#23272b", 
        padding: "2rem", 
        borderRadius: "12px", 
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        marginBottom: "2rem"
      }}>
        <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Recent Activities</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "1rem", 
            background: "#212529", 
            borderRadius: "8px",
            borderLeft: "4px solid #ffd700"
          }}>
            <div style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#ffd700" }}>🛒</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>New order #1234 received</p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb" }}>2 minutes ago</p>
            </div>
            <div style={{ color: "#ffd700", fontWeight: "bold" }}>$299.99</div>
          </div>

          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "1rem", 
            background: "#212529", 
            borderRadius: "8px",
            borderLeft: "4px solid #f093fb"
          }}>
            <div style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#f093fb" }}>⭐</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>New product review added</p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb" }}>15 minutes ago</p>
            </div>
            <div style={{ color: "#f093fb", fontWeight: "bold" }}>5 stars</div>
          </div>

          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "1rem", 
            background: "#212529", 
            borderRadius: "8px",
            borderLeft: "4px solid #4facfe"
          }}>
            <div style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#4facfe" }}>👤</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>New customer registered</p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb" }}>1 hour ago</p>
            </div>
            <div style={{ color: "#4facfe", fontWeight: "bold" }}>John Doe</div>
          </div>

          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "1rem", 
            background: "#212529", 
            borderRadius: "8px",
            borderLeft: "4px solid #43e97b"
          }}>
            <div style={{ fontSize: "1.5rem", marginRight: "1rem", color: "#43e97b" }}>📦</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>Order #1230 shipped</p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb" }}>2 hours ago</p>
            </div>
            <div style={{ color: "#43e97b", fontWeight: "bold" }}>Shipped</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div style={{ 
        background: "#23272b", 
        padding: "2rem", 
        borderRadius: "12px", 
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>System Status</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div style={{ 
            padding: "1rem", 
            background: "#d4edda", 
            borderRadius: "8px", 
            border: "1px solid #c3e6cb",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🟢</div>
            <h4 style={{ margin: 0, color: "#155724" }}>Server Status</h4>
            <p style={{ margin: 0, color: "#155724", fontSize: "0.9rem" }}>Online</p>
          </div>
          <div style={{ 
            padding: "1rem", 
            background: "#d4edda", 
            borderRadius: "8px", 
            border: "1px solid #c3e6cb",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🟢</div>
            <h4 style={{ margin: 0, color: "#155724" }}>Database</h4>
            <p style={{ margin: 0, color: "#155724", fontSize: "0.9rem" }}>Connected</p>
          </div>
          <div style={{ 
            padding: "1rem", 
            background: "#d4edda", 
            borderRadius: "8px", 
            border: "1px solid #c3e6cb",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🟢</div>
            <h4 style={{ margin: 0, color: "#155724" }}>API Services</h4>
            <p style={{ margin: 0, color: "#155724", fontSize: "0.9rem" }}>Running</p>
          </div>
          <div style={{ 
            padding: "1rem", 
            background: "#d4edda", 
            borderRadius: "8px", 
            border: "1px solid #c3e6cb",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🟢</div>
            <h4 style={{ margin: 0, color: "#155724" }}>Payment Gateway</h4>
            <p style={{ margin: 0, color: "#155724", fontSize: "0.9rem" }}>Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};