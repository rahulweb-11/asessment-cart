import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
// import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';

const loggerMiddleware = createLogger();

// configuration object for redux-persist
const persistConfig = {
    key: 'root',
    storage,
}

//define persistReducer that include persit config and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

const persistor = persistStore(store);

export { store, persistor };