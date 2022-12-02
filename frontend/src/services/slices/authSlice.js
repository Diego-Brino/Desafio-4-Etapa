import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "token",
  initialState: { value: "" },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;