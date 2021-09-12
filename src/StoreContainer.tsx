import React from "react";
import { Provider } from "react-redux";
import ThemeContainer from "./ThemeContainer";
import store from "./stores/store";

function StoreContainer() {
  return (
    <Provider store={store}>
      <ThemeContainer />
    </Provider>
  );
}

export default StoreContainer;
