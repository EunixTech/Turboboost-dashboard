import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    first_name: "Rishi",
    last_name: "Sippy",
    email_address: "sippyrishu@gmail.com",
    country: "India",
    phone_number: "5698263497855",
    business_type: "big",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => { 
      state.user = action.payload;
    },
  },
});

export const { setUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
