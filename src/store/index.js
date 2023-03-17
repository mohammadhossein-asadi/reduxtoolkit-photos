import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../slice/photoSlice";

const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});

export default store;
