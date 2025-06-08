import { createContext, useEffect, useState } from "react";
import { food_list } from "../../../assets/frontend_assets/assets";

export const StoreContext = createContext();
// import { StoreContext } from "./StoreContextCreate.jsx";
export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = { cartItems, removeFromCart, addToCart,food_list }; //returning the context api objects

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
// export default StoreContextProvider;
