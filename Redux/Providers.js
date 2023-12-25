import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import SocketProvider from '@/context/Socket/SocketContext'

import Store from './Store'
import { ToastContainer } from 'react-toastify'

const Providers = ({ children }) => {
    const persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <SocketProvider>
          {children}
        </SocketProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers