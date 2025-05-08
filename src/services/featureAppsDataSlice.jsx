import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featuredApps: [
    {
      src: '/graphic/integrations/p1.png',
      title: 'TxtCart',
      connectClick: setShow => () => setShow(true), // Pass setShow as a parameter
      connect: true,
      sub: 'Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.',
    },
    {
      connected: true,
      src: '/graphic/integrations/p2.png',
      title: 'Appstack',
      connectClick: setShow => () => setShow(true), // Pass setShow as a parameter
      connect: true,
      sub: 'Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.',
    },
    // Add more featured apps as needed
  ],
};

const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {},
});

// Export the featured apps selector
export const selectFeaturedApps = (state) => state.features.featuredApps;

export default featuresSlice.reducer;
