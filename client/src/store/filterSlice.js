import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    make: '',
    duration: 'thisMonth',
  },
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const { setMake, setDuration } = filterSlice.actions;
export default filterSlice.reducer;