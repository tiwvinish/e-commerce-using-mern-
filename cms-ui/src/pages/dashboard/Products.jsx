import React from "react";
import { Product } from "../../components";

const products = [
  {
    name: 'Atomic Habits',
    brand: 'James Clear',
    price: 15.99,
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
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
    name: 'Clean Code',
    brand: 'Robert C. Martin',
    price: 28.99,
    description: 'A Handbook of Agile Software Craftsmanship.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
    category: 'Books',
  },
  {
    name: 'The Lean Startup',
    brand: 'Eric Ries',
    price: 21.99,
    description: 'How Today’s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
    category: 'Books',
  },
  {
    name: 'Zero to One',
    brand: 'Peter Thiel',
    price: 19.99,
    description: 'Notes on Startups, or How to Build the Future.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg',
    category: 'Books',
  },
  {
    name: 'The Alchemist',
    brand: 'Paulo Coelho',
    price: 14.99,
    description: 'A fable about following your dream.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX320_BO1,204,203,200_.jpg',
    category: 'Books',
  },
  {
    name: 'Sapiens: A Brief History of Humankind',
    brand: 'Yuval Noah Harari',
    price: 24.99,
    description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg',
    category: 'Books',
  },
  {
    name: 'Educated',
    brand: 'Tara Westover',
    price: 16.99,
    description: 'A Memoir about a woman who, kept out of school, leaves her survivalist family.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg',
    category: 'Books',
  },
  {
    name: 'Thinking, Fast and Slow',
    brand: 'Daniel Kahneman',
    price: 17.99,
    description: 'A tour of the mind and explanation of the two systems that drive the way we think.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._SX324_BO1,204,203,200_.jpg',
    category: 'Books',
  },
  {
    name: 'To Kill a Mockingbird',
    brand: 'Harper Lee',
    price: 13.99,
    description: 'A classic novel of racism and injustice in the deep South.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OdwZ9F3eL.jpg',
    category: 'Books',
  },
  {
    name: '1984',
    brand: 'George Orwell',
    price: 12.49,
    description: 'A dystopian social science fiction novel and cautionary tale.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
    category: 'Books',
  },
  {
    name: 'The Great Gatsby',
    brand: 'F. Scott Fitzgerald',
    price: 11.99,
    description: 'A novel about the American dream and the roaring twenties.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg',
    category: 'Books',
  },
  {
    name: 'The Catcher in the Rye',
    brand: 'J.D. Salinger',
    price: 10.99,
    description: 'A story about adolescent alienation and loss of innocence.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg',
    category: 'Books',
  },
  {
    name: 'Brave New World',
    brand: 'Aldous Huxley',
    price: 14.49,
    description: 'A futuristic society controlled by technology and government.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81m2+4kFQSL.jpg',
    category: 'Books',
  },
];

const Products = () => (
  <div style={{ padding: "2rem", background: "#181a1b", minHeight: "100vh" }}>
    <h2 style={{ color: '#4facfe', fontWeight: 700, marginBottom: 20, textShadow: '0 2px 8px #0008' }}>All Books</h2>
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {products.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  </div>
);

export default Products; 