import React from "react";

export const About = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: "4rem",
        padding: "3rem 0",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "12px",
        color: "white"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", opacity: 0.9 }}>
          We are passionate about delivering exceptional products and experiences to our customers
        </p>
      </div>

      {/* Company Story Section */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333", textAlign: "center" }}>
          Our Story
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666", marginBottom: "1.5rem" }}>
              Founded with a vision to revolutionize the way people shop online, our company has grown from a small startup to a trusted name in e-commerce. We believe in quality, innovation, and customer satisfaction above all else.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666" }}>
              Our journey began with a simple idea: to create an online shopping experience that's not just convenient, but delightful. Today, we serve thousands of customers worldwide, offering a curated selection of premium products.
            </p>
          </div>
          <div style={{ 
            background: "#f8f9fa", 
            padding: "2rem", 
            borderRadius: "12px",
            border: "1px solid #e9ecef"
          }}>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Quick Facts</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e9ecef" }}>
                <strong>Founded:</strong> 2020
              </li>
              <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e9ecef" }}>
                <strong>Customers Served:</strong> 50,000+
              </li>
              <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e9ecef" }}>
                <strong>Products:</strong> 10,000+
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <strong>Team Members:</strong> 100+
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div style={{ 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
            padding: "2.5rem", 
            borderRadius: "12px",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Our Mission</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.9 }}>
              To provide our customers with the highest quality products and exceptional service, making their shopping experience seamless and enjoyable.
            </p>
          </div>
          <div style={{ 
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
            padding: "2.5rem", 
            borderRadius: "12px",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Our Vision</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.9 }}>
              To become the leading e-commerce platform that customers trust and love, known for innovation, quality, and outstanding customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333", textAlign: "center" }}>
          Our Values
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Excellence</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              We strive for excellence in everything we do, from product quality to customer service.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤝</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Integrity</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              We conduct our business with honesty, transparency, and ethical practices.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💡</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Innovation</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              We continuously innovate to improve our products and services for our customers.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>❤️</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Customer First</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Our customers are at the heart of every decision we make and action we take.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333", textAlign: "center" }}>
          Meet Our Team
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ 
              width: "120px", 
              height: "120px", 
              borderRadius: "50%", 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              color: "white"
            }}>
              👨‍💼
            </div>
            <h3 style={{ color: "#333", marginBottom: "0.5rem" }}>John Smith</h3>
            <p style={{ color: "#667eea", marginBottom: "1rem", fontWeight: "bold" }}>CEO & Founder</p>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Visionary leader with 15+ years of experience in e-commerce and technology.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ 
              width: "120px", 
              height: "120px", 
              borderRadius: "50%", 
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              color: "white"
            }}>
              👩‍💼
            </div>
            <h3 style={{ color: "#333", marginBottom: "0.5rem" }}>Sarah Johnson</h3>
            <p style={{ color: "#f093fb", marginBottom: "1rem", fontWeight: "bold" }}>CTO</p>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Technology expert driving innovation and digital transformation.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ 
              width: "120px", 
              height: "120px", 
              borderRadius: "50%", 
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              color: "white"
            }}>
              👨‍💻
            </div>
            <h3 style={{ color: "#333", marginBottom: "0.5rem" }}>Mike Chen</h3>
            <p style={{ color: "#4facfe", marginBottom: "1rem", fontWeight: "bold" }}>Head of Product</p>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Product strategist focused on creating exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        textAlign: "center", 
        padding: "3rem", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "12px",
        color: "white"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Ready to Experience the Difference?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
          Join thousands of satisfied customers who trust us for their shopping needs.
        </p>
        <button style={{ 
          padding: "12px 32px", 
          fontSize: "1.1rem", 
          background: "white", 
          color: "#667eea", 
          border: "none", 
          borderRadius: "8px", 
          cursor: "pointer",
          fontWeight: "bold",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
}; 