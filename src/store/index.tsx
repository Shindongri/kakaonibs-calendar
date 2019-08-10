import React, { createContext, useReducer, useContext } from 'react'
import { initialState, reducer } from '../reducer'

export const Context = createContext(initialState)

const Provider = ({ children }: any) => {
  const [state, dispatch]: any = useReducer(reducer, initialState)

  const value: any = { state, dispatch }

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export const useDispatch = () => {
  const { dispatch }: any = useContext(Context)

  return dispatch
}

export const useStore = () => {
  const { state }: any = useContext(Context)

  return state
}

export default Provider
