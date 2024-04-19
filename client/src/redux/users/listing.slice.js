import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    deleteListingStart: (state) => {
      state.loading = null;
    },
    deleteListingSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteListingFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  deleteListingStart,
  deleteListingSuccess,
  deleteListingFailure,
} = listingSlice.actions;

export default listingSlice.reducer;
