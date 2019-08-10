import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

import { SET_MODE, SET_YEAR, SET_MONTH } from '../reducer'
import { useStore, useDispatch } from '../store'

const ControlViewWrapper = styled.div`
  display: flex;
`

const YearMonthWrapper = styled.div`
  display: flex;
`

const StyledYearMonth = styled.div`

`

const ModeWrapper = styled.div`
  display: flex;
`

const StyledMode = styled.div`

`

const YearMonth = () => {
  const { year, month } = useStore()
  const dispatch = useDispatch()

  const prevMonth = useCallback(() => dispatch({ type: SET_MONTH, payload: (month - 1) }), [month])
  const nextMonth = useCallback(() => dispatch({ type: SET_MONTH, payload: (month + 1) }), [month])

  return (
    <YearMonthWrapper>
      <Icon type='left' onClick={prevMonth} />
      <StyledYearMonth>{`${year}년 ${month}월`}</StyledYearMonth>
      <Icon type='right' onClick={nextMonth} />
    </YearMonthWrapper>
  )
}

const Mode = () => {
  const { mode } = useStore()
  const dispatch = useDispatch()

  const onChangeMode = useCallback(mode => dispatch({ type: SET_MODE, payload: mode }), [mode])

  return (
    <ModeWrapper>
      <StyledMode onClick={ () => onChangeMode('month') }>월</StyledMode>
      <StyledMode onClick={ () => onChangeMode('week') }>주</StyledMode>
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
