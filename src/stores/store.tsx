import {
    Action,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import rootReducers from "./reducers/rootReducers";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const middleware = [...getDefaultMiddleware()];

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme']
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware,
});
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
export {
    store,
    persistor
};
