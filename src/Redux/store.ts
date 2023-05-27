import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import configReducer from './reducer'

const persistConfig = {
  key: 'config',
  blacklist: ['navigation', 'ui', 'router'],
  storage: AsyncStorage
}

const configDBPersistor = persistReducer(persistConfig, configReducer)

export const store = configureStore({
  reducer: {
    configDB: configDBPersistor
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      inmutableCheck: false
    })
})

export type ReduxStore=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
