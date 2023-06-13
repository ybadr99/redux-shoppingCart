import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartSlice from '../features/cart/cartSlice';
import modalSlice from '../features/modal/modalSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
    modal: modalSlice,
  },
});
