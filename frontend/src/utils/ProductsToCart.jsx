export const addToCart = (product, quantity) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const cartItem = { product, quantity };
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  export const removeFromCart = (cart, itemToRemove) => {
    const updatedCart = cart.filter(item => item !== itemToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export const incrementQuantity = (cart, itemToIncrement) => {
    const updatedCart = cart.map(item => {
      if (item === itemToIncrement) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export const decrementQuantity = (cart, itemToDecrement) => {
    const updatedCart = cart.map(item => {
      if (item === itemToDecrement && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  };