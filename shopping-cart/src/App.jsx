import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { productsData } from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app">
      <Navbar
        cartCount={totalItemCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      <main className="container">
        <h1>Products</h1>
        <ProductList products={productsData} addToCart={addToCart} />
      </main>
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
    </div>
  );
}

export default App;