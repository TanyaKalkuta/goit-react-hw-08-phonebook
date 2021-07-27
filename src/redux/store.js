import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, rootReducer),
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);
// export default { store, persistor };
export default store;
