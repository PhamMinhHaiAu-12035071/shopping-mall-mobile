import React from "react";
import {Provider} from "react-redux";
import ThemeContainer from "./ThemeContainer";
import {persistor, store} from "./stores/store";
import {PersistGate} from "redux-persist/integration/react";

function StoreContainer() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeContainer/>
            </PersistGate>
        </Provider>
    );
}

export default StoreContainer;
