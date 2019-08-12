export const SET_MODE = 'SET_MODE'
export const SET_YEAR = 'SET_YEAR'
export const SET_MONTH = 'SET_MONTH'
export const SET_DAY = 'SET_DAY'
export const SET_SHOW_POPUP = 'SET_SHOW_POPUP'

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.payload
      }
    case SET_YEAR:
      return {
        ...state,
        year: action.payload
      }
    case SET_MONTH:
      return {
        ...state,
        month: action.payload
      }
    case SET_DAY:
      return {
        ...state,
        day: action.payload
      }
    case SET_SHOW_POPUP:
      return {
        ...state,
        showPopup: action.payload
      }
    default:
      return state
  }
}

export const initialState = {
  mode: 'week',
  
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),

  showPopup: false
}
