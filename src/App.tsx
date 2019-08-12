import React from 'react'
import { createGlobalStyle } from 'styled-components'

import AppProvider from './store'
import MainPage from './containers/MainPage'

import Portal from './components/Portal'
import SchedulePopup from './components/SchdulePopup/SchedulePopup'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Spoqa Han Sans, Sans-serif;
    width: 100%;
    background-color: #FFFFFF;
  }
`

const App = () => (
  <AppProvider>
    <MainPage />
    <Portal>
      <SchedulePopup />
    </Portal>
    <GlobalStyle />
  </AppProvider>
)

export default App
