import React, { useState } from "react";
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

// Testimonials data
const testimonials = [
  {
    name: "John johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Amazing selection and super easy to order. The customer support is top-notch!"
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "I love the reviews feature! Helped me pick the perfect product. Highly recommend."
  },
  {
    name: "Alex james",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    text: "Fast delivery and great quality. Will definitely shop here again!"
  },
  {
    name: "Priya sai Patel",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The interface is so modern and easy to use. Shopping here is a breeze!"
  }
];

const Landing = () => {
  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Dummy login logic (replace with real API call)
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        alert("Login successful!");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

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
      {/* Login Form */}
      <form onSubmit={handleLogin} style={{
        background: "#23272b",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
        padding: 32,
        minWidth: 320,
        maxWidth: 380,
        marginBottom: 36,
        border: "1px solid #333",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ color: '#ffd700', fontWeight: 700, marginBottom: 18, textShadow: '0 2px 8px #000' }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px 14px',
            marginBottom: 16,
            borderRadius: 6,
            border: '1px solid #444',
            background: '#181a1b',
            color: '#fff',
            fontSize: 16
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px 14px',
            marginBottom: 16,
            borderRadius: 6,
            border: '1px solid #444',
            background: '#181a1b',
            color: '#fff',
            fontSize: 16
          }}
        />
        {error && <div style={{ color: '#ff4d4f', marginBottom: 12 }}>{error}</div>}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
            color: "#23272b",
            fontWeight: 700,
            fontSize: 18,
            padding: "10px 28px",
            border: "none",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(67,233,123,0.18)",
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: 4
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
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

      {/* Customer Voices Section */}
      <div style={{
        marginTop: 64,
        width: '100%',
        background: 'rgba(35,39,43,0.95)',
        padding: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ color: '#ffd700', fontWeight: 700, marginBottom: 32, fontSize: 32, textShadow: '0 2px 8px #000' }}>
          What Our Customers Say
        </h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 1200 }}>
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              style={{
                background: '#23272b',
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                padding: 28,
                minWidth: 260,
                maxWidth: 320,
                textAlign: 'center',
                border: '1px solid #333',
                margin: 8,
                position: 'relative',
                opacity: 0,
                animation: `fadeIn 0.7s ease ${idx * 0.2 + 0.2}s forwards`,
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{
                position: 'absolute',
                top: 18,
                left: 18,
                fontSize: 28,
                color: '#ffd700',
                opacity: 0.25
              }}>
                <i className="fas fa-quote-left"></i>
              </span>
              <img src={t.image} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 12, border: '2px solid #ffd700' }} />
              <h4 style={{ color: '#43e97b', margin: '8px 0 4px' }}>{t.name}</h4>
              <div style={{ marginBottom: 8 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i < t.rating ? '' : '-o'}`}
                    style={{ color: i < t.rating ? '#ffd700' : '#555', fontSize: 18, marginRight: 2 }}
                  />
                ))}
              </div>
              <p style={{ color: '#e0e0e0', fontStyle: 'italic', fontSize: 16 }}>
                {`"${t.text}"`}
              </p>
            </div>
          ))}
        </div>
        {/* Inline keyframes for fadeIn animation */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 700px) {
            .testimonial {
              min-width: 90vw !important;
              max-width: 98vw !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Landing; 