import { configureStore } from '@reduxjs/toolkit';
import {combineReducers } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {userReducer} from './reducers/userReducer'
import {titleReducer} from './reducers/titleReducer'
import {followUpReducer} from './reducers/FollowUpReducer'
import {logoReducer} from './reducers/logoReducer'
import {socialReducer} from './reducers/socialReducer'

const reducer = combineReducers({

    user: userReducer,
    
    title: titleReducer,

    followUp: followUpReducer,

    logo: logoReducer,

    url: socialReducer

});


const persistConfig = {
    key: 'root',
    storage,
  };
  
  
const persistedReducer = persistReducer(persistConfig, reducer);


const middleware = [thunk]

const store = configureStore({

    reducer: persistedReducer,

    middleware,

    devTools: process.env.NODE_ENV !== 'production',


})

export const persistor = persistStore(store);
export default store;