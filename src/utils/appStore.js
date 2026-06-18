import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieStore from "./movieStore";


const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieStore,
  }
});

export default appStore;