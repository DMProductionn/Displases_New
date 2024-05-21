import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Filter from './Slices/Filter'
import Category from './Slices/Category'
import Cart from './Slices/Cart.slice';
import CartTotal from './Slices/CartTotal';
import Products from './Slices/products.slice';



const rootReducer = combineReducers({
    Filter,
    Category,
    Cart,
    CartTotal,
    Products
}) 

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['что хотим сохранять'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type TypeRootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);