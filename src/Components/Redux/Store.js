import { combineReducers, createStore } from "redux";
import CartReducer from "./Reducers/CartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers  = combineReducers({
  cart: CartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;