function CartItem({
    item,
    onIncrease,
    onDecrease,
    onRemove
  }) {
    return (
      <div className="cart-item">
  
        <img
          src={item.image}
          alt={item.name}
          className="cart-item-image"
        />
  
        <div className="cart-item-info">
  
          <h3>{item.name}</h3>
  
          <p className="cart-item-price">
            ${item.price.toFixed(2)}
          </p>
  
          <div className="quantity-control">
  
            <button onClick={() => onDecrease(item.id)}>
              -
            </button>
  
            <span>{item.quantity}</span>
  
            <button onClick={() => onIncrease(item.id)}>
              +
            </button>
  
          </div>
  
        </div>
  
        <button
          className="remove-button"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
  
      </div>
    );
  }
  
  export default CartItem;