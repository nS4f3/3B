import React from "react";
import { LoginContainer } from "./containers";
import { Provider } from "react-redux";
import store from "./storage";

export default function App() {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
}
