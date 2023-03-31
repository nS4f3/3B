import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userFeatures";

export {
  login as userlogin,
  loading as userloading,
  error as userError,
} from "./features/userFeatures";

const store = configureStore({
  reducer: {
    userReducer,
  },
});

export default store;
