import React from "react";
import { Product } from "../../components";

const products = [
  {
    name: 'Atomic Habits',
    brand: 'James Clear',
    price: 15.99,
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
    category: 'Books',
  },
  {
    name: 'The Pragmatic Programmer',
    brand: 'Andrew Hunt, David Thomas',
    price: 32.50,
    description: 'Your Journey to Mastery, 20th Anniversary Edition.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX377_BO1,204,203,200_.jpg',
    category: 'Books',
  },
  {
    name: 'Deep Work',
    brand: 'Cal Newport',
    price: 18.00,
    description: 'Rules for Focused Success in a Distracted World.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41bWcNdTG+L._SX329_BO1,204,203,200_.jpg',
    category: 'Books',
  },
  {
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 120.00,
    description: 'Breathable mesh upper with Max Air cushioning.',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/6c6e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-270-mens-shoes-KkLcGR.png',
    category: 'Shoes',
  },
  {
    name: 'Apple iPhone 14',
    brand: 'Apple',
    price: 999.00,
    description: 'The latest iPhone with advanced features.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
    category: 'Electronics',
  },
  {
    name: 'Samsung QLED TV',
    brand: 'Samsung',
    price: 799.99,
    description: 'Stunning 4K QLED display for immersive viewing.',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa55q60bawxxl/gallery/in-qled-q60b-qa55q60bawxxl-531982991',
    category: 'Electronics',
  },
  {
    name: 'Adidas Ultraboost',
    brand: 'Adidas',
    price: 180.00,
    description: 'Responsive running shoes for all-day comfort.',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg',
    category: 'Shoes',
  },
];

const Products = () => (
  <div style={{ padding: "2rem", background: "#181a1b", minHeight: "100vh" }}>
    <h2 style={{ color: '#4facfe', fontWeight: 700, marginBottom: 20, textShadow: '0 2px 8px #0008' }}>All Products</h2>
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {products.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  </div>
);

export default Products; 