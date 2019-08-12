import React, { useCallback } from "react"
import {
  ControlViewWrapper,
  YearMonthWrapper,
  StyledYearMonth,
  ModeWrapper,
  StyledIcon,
  StyledMode
} from "./ControlView.style"

import { SET_MODE, SET_YEAR, SET_MONTH } from "../../reducer"
import { useStore, useDispatch } from "../../store"

const YearMonth = () => {
  const { year, month } = useStore()
  const dispatch = useDispatch()

  const prevMonth = useCallback(() => dispatch({ type: SET_MONTH, payload: month - 1 }), [month])
  const nextMonth = useCallback(() => dispatch({ type: SET_MONTH, payload: month + 1 }), [month])

  return (
    <YearMonthWrapper>
      <StyledIcon type="left" onClick={prevMonth} />
      <StyledYearMonth>{`${year}년 ${month}월`}</StyledYearMonth>
      <StyledIcon type="right" onClick={nextMonth} />
    </YearMonthWrapper>
  )
}

const Mode = () => {
  const { mode } = useStore()
  const dispatch = useDispatch()

  const onChangeMode = useCallback(selectedMode => dispatch({ type: SET_MODE, payload: selectedMode }), [mode])

  return (
    <ModeWrapper>
      <StyledMode onClick={() => onChangeMode("month")}>월</StyledMode>
      <StyledMode onClick={() => onChangeMode("week")}>주</StyledMode>
    </ModeWrapper>
  )
}

const ControlView = () => (
  <ControlViewWrapper>
    <YearMonth />
    <Mode />
  </ControlViewWrapper>
)

export default ControlView
