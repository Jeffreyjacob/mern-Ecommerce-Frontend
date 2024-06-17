import {configureStore,combineReducers} from '@reduxjs/toolkit';
import  {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducers from '@/redux/feature/CartSlice';

const rootReducer = combineReducers({
    cart:cartReducers
})

const PersistConfig = {
    key: 'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(PersistConfig,rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);