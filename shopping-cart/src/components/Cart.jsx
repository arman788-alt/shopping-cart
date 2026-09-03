import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, isOpen, toggleCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // কার্ট বন্ধ থাকলে কিছুই রেন্ডার হবে না
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          <div className="cart-body">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-footer">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;