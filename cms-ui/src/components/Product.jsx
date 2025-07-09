import React from 'react';

const Product = ({ product }) => {
  if (!product) return null;
  return (
    <div className="product-card" style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, maxWidth: 300 }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }} />
      <h3 style={{ margin: '12px 0 4px' }}>{product.name}</h3>
      <p style={{ color: '#888', margin: 0 }}>{product.brand}</p>
      <p style={{ fontWeight: 'bold', margin: '8px 0' }}>${product.price}</p>
      <p style={{ fontSize: 14, color: '#555' }}>{product.description}</p>
    </div>
  );
};

export default Product; 