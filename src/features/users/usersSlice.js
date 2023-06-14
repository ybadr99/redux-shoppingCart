import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  users: [],
  isLoading: true,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      console.log('pending...');
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // Add user to the state array
      console.log('fulfilled...');
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log('rejected', action);
      state.isLoading = true;
    });
    //     [getUsers.pending]: (state, action) => {
    //       console.log(action);

    //       state.isLoading = true;
    //     },
    //     [getUsers.fulfilled]: (state, action) => {
    //       console.log(action);

    //       state.users = action.payload;
    //       state.isLoading = false;
    //     },
    //     [getUsers.rejected]: (state, action) => {
    //       console.log(action);
    //       state.isLoading = true;
    //     },
  },
});

export default usersSlice.reducer;
