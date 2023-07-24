import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "CartContext";

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [], total: 0 });

  const addToCart = (product) => {
    const products = [...cart.products, product];
    const total = product.price * product.count;
    setCart({ products, total });
  };

  const removeFromCart = (productId) => {
    const products = [...cart.products];
    let total = cart.total;
    const indexOfProductToBeRemoved = products.findIndex(
      (product) => product._id === productId
    );
    const productToBeRemoved = products[indexOfProductToBeRemoved];
    total -= productToBeRemoved.count * productToBeRemoved.price;
    products.splice(indexOfProductToBeRemoved, 1);
    setCart({ products, total });
  };

  const updateCart = (newCart) => setCart(newCart);
  return (
    <CartContext.Provider
      value={{
        cart: cart.products,
        setCart: updateCart,
        cartTotal: cart.total,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
