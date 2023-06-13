import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item.amount >= 1) {
        item.amount = item.amount - 1;
        if (item.amount === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== payload.id
          );
        }
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((cart) => {
        amount += cart.amount;
        total += cart.amount * cart.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload.products;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
