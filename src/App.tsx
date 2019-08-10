import React from 'react'

import AppProvider from './store'
import MainPage from './containers/MainPage'

const App = () => (
  <AppProvider>
    <MainPage />
  </AppProvider>
)

export default App
