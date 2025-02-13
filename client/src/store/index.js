import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    filters: filterReducer,
  },
});
