import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilterData = (state) => state.filter.filterData;

export default filterSlice.reducer;
