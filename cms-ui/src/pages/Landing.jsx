import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Product Catalog",
    description: "Browse a wide range of products with detailed information and images.",
    icon: "fa-box-open"
  },
  {
    title: "Order Management",
    description: "Easily manage your orders and track their status in real-time.",
    icon: "fa-shopping-cart"
  },
  {
    title: "Customer Reviews",
    description: "Read and write reviews to help others make informed decisions.",
    icon: "fa-star"
  }
];

const Landing = () => {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #23272b 60%, #181a1b 100%)",
      color: "#f8f9fa",
      padding: "48px 0"
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, color: "#ffd700", textShadow: "0 2px 8px #000" }}>
        Welcome to MERNProject
      </h1>
      <p style={{ fontSize: 20, maxWidth: 600, textAlign: "center", marginBottom: 40, color: "#e0e0e0" }}>
        Your one-stop solution for managing products, orders, and customer reviews with a modern, intuitive interface.
      </p>
      <div style={{ display: "flex", gap: 32, marginBottom: 48, flexWrap: "wrap", justifyContent: "center" }}>
        {features.map((feature) => (
          <div key={feature.title} style={{
            background: "#23272b",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            padding: 28,
            minWidth: 220,
            maxWidth: 260,
            textAlign: "center",
            margin: 8,
            border: "1px solid #333"
          }}>
            <i className={`fas ${feature.icon}`} style={{ fontSize: 36, color: "#43e97b", marginBottom: 12 }}></i>
            <h3 style={{ color: "#ffd700", fontWeight: 700, margin: "12px 0 8px" }}>{feature.title}</h3>
            <p style={{ color: "#f093fb", fontSize: 16 }}>{feature.description}</p>
          </div>
        ))}
      </div>
      <Link to="/products">
        <button style={{
          background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
          color: "#23272b",
          fontWeight: 700,
          fontSize: 20,
          padding: "14px 36px",
          border: "none",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(67,233,123,0.18)",
          cursor: "pointer",
          transition: "background 0.2s"
        }}>
          View Products
        </button>
      </Link>
    </div>
  );
};

export default Landing; 