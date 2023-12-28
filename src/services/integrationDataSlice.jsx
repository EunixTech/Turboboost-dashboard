import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: 0,
  integrations: [
    // Define your integration data here
    {
      connected: true,
      src: "/graphic/integrations/p3.png",
      title: "HubSpot",
      connectClick: (setShow) => setShow(true), // Replace with your logic
      connect: false,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p4.png",
      title: "Shopify",
      connectClick: (setShow) => setShow(true), // Replace with your logic
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p5.png",
      title: "Klaviyo",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p6.png",
      title: "Zapier",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p7.png",
      title: "Slack",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p8.png",
      title: "WooCommerce",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "/graphic/integrations/p9.png",
      title: "TxtCart",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "graphic/integrations/p2.png",
      title: "Appstack",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
    {
      src: "graphic/integrations/p9.png",
      title: "TxtCart",
      connectClick: (setShow) => setShow(true),
      connect: true,
      sub: "Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus.",
    },
  ],
};

const integrationSlice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = integrationSlice.actions;

export const selectSelectedTab = (state) => state.integration.selectedTab;
export const selectIntegrations = (state) => state.integration.integrations;

export default integrationSlice.reducer;
