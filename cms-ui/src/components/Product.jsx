import React from 'react';

const Product = ({ product }) => {
  if (!product) return null;
  return (
    <div className="product-card" style={{ 
      border: '1px solid #333', 
      borderRadius: 8, 
      padding: 16, 
      maxWidth: 300, 
      background: '#23272b',
      color: '#f8f9fa',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4, marginBottom: 12 }} />
      <h3 style={{ margin: '12px 0 4px', color: '#ffd700', fontWeight: 700 }}>{product.name}</h3>
      <p style={{ color: '#f093fb', margin: 0, fontWeight: 500 }}>{product.brand}</p>
      <p style={{ fontWeight: 'bold', margin: '8px 0', color: '#43e97b' }}>${product.price}</p>
      <p style={{ fontSize: 15, color: '#e0e0e0' }}>{product.description}</p>
    </div>
  );
};

export default Product; 