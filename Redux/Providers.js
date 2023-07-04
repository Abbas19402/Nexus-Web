import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import SocketProvider from '@/context/Socket/SocketContext'

import Store from './Store'

const Providers = ({ children }) => {
    const persistor = persistStore(Store);
  return (
    <SocketProvider>
      <Provider store={Store}>
          <PersistGate persistor={persistor}>
              {children}
          </PersistGate>
      </Provider>
    </SocketProvider>
  )
}

export default Providers