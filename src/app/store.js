import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import favoriteReducer from '../features/favoriteSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    favorite: favoriteReducer
  },
});
