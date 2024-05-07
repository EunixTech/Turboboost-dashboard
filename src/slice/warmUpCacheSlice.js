import { createSlice } from '@reduxjs/toolkit';

export const demoSlice = createSlice({
  name: 'demo',
  initialState: {
    dark: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleDarkMode } = demoSlice.actions;
export const someAction = (data) => ({
    type: 'SOME_ACTION_TYPE',
    payload: data,
  });
  
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch(someAction(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export const Button1 = ({ onClick }) => {
};

export const HoverDetail = () => {
};

export const Button = () => {
};

export default demoSlice.reducer;
