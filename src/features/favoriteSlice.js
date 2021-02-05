import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: null,
  },
  reducers: {
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    resetFavorite: (state) => {
      state.favorite = null;
    },
  },
});

export const { setFavorite, resetFavorite } = favoriteSlice.actions;

export const selectFavorite = state => state.favorite.user;

export default favoriteSlice.reducer;
