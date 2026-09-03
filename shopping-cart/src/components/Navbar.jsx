import React from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar">
      <h2>TechStore</h2>
      <button className="cart-btn" onClick={toggleCart}>
        Cart <span className="cart-badge">{cartCount}</span>
      </button>
    </nav>
  );
};

export default Navbar;