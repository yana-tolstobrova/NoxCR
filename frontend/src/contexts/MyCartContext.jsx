import React, { createContext, useContext, useState, useEffect } from "react";

const MyCartContext = createContext();


export function MyCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount")) || 0
  );

  useEffect(() => {
    // Actualiza cartCount cuando cambie en localStorage
    const storedCartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    setCartCount(storedCartCount);
  }, []);

  // Función para actualizar el número total de productos en el carrito
  const updateCartCount = (newCount) => {
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount.toString());
  };

  return (
    <MyCartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </MyCartContext.Provider>
  );
}

  export const useMyCart = () => {
    return useContext(MyCartContext);
  }