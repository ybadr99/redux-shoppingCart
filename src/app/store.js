import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartSlice from '../features/cart/cartSlice';
import modalSlice from '../features/modal/modalSlice';
import usersSlice from '../features/users/usersSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
    modal: modalSlice,
    users: usersSlice,
  },
});
