import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the form data to a backend or API
    console.log("Form submitted:", form);
  };

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
          Contact Us
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", opacity: 0.9 }}>
          Get in touch with us. We'd love to hear from you and answer any questions you might have.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
        {/* Contact Form */}
        <div style={{ 
          background: "white", 
          padding: "2.5rem", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
        }}>
          <h2 style={{ color: "#333", marginBottom: "2rem", fontSize: "2rem" }}>Send us a Message</h2>
          
          {submitted ? (
            <div style={{ 
              padding: "2rem", 
              background: "#d4edda", 
              borderRadius: "8px", 
              border: "1px solid #c3e6cb",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ color: "#155724", marginBottom: "1rem" }}>Thank you!</h3>
              <p style={{ color: "#155724", margin: 0 }}>
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: "bold" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: "bold" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: "bold" }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter message subject"
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: "bold" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                  placeholder="Enter your message here..."
                />
              </div>

              <button 
                type="submit" 
                style={{ 
                  width: "100%",
                  padding: "14px 24px", 
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.2s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <div style={{ 
            background: "white", 
            padding: "2.5rem", 
            borderRadius: "12px", 
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            marginBottom: "2rem"
          }}>
            <h2 style={{ color: "#333", marginBottom: "2rem", fontSize: "2rem" }}>Get in Touch</h2>
            
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                  color: "white",
                  fontSize: "1.5rem"
                }}>
                  📍
                </div>
                <div>
                  <h4 style={{ margin: 0, color: "#333" }}>Address</h4>
                  <p style={{ margin: 0, color: "#666" }}>
                    123 Business Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                  color: "white",
                  fontSize: "1.5rem"
                }}>
                  📧
                </div>
                <div>
                  <h4 style={{ margin: 0, color: "#333" }}>Email</h4>
                  <p style={{ margin: 0, color: "#666" }}>
                    info@mern3pm.com<br />
                    support@mern3pm.com
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                  color: "white",
                  fontSize: "1.5rem"
                }}>
                  📞
                </div>
                <div>
                  <h4 style={{ margin: 0, color: "#333" }}>Phone</h4>
                  <p style={{ margin: 0, color: "#666" }}>
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                  color: "white",
                  fontSize: "1.5rem"
                }}>
                  🕒
                </div>
                <div>
                  <h4 style={{ margin: 0, color: "#333" }}>Business Hours</h4>
                  <p style={{ margin: 0, color: "#666" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{ 
            background: "white", 
            padding: "2.5rem", 
            borderRadius: "12px", 
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ color: "#333", marginBottom: "2rem", fontSize: "2rem" }}>Frequently Asked Questions</h2>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>How can I track my order?</h4>
              <p style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
                You can track your order by logging into your account and visiting the "My Orders" section, or by using the tracking number provided in your order confirmation email.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>What is your return policy?</h4>
              <p style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
                We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please contact our support team to initiate a return.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>Do you ship internationally?</h4>
              <p style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping options during checkout.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>How can I contact customer support?</h4>
              <p style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
                You can reach our customer support team via email, phone, or by filling out the contact form on this page. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 