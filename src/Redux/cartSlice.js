import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartItems = [
        {
          id: 1,
          title: "Product 1",
          price: 90,
          quantity: 2,
        },
      ];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from the store.
// Selectors can also be used to compose selectors from other selectors. This can be helpful in reducing redundant code.

export default cartSlice.reducer;
