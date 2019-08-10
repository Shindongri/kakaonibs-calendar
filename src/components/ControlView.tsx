import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { getYear } from 'date-fns'
import { Icon } from 'antd'

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
  const [year, setYear] = useState<number>(() => getYear(new Date()))
  const [month, setMonth] = useState<number>(() => getYear(new Date()))

  const prevMonth = useCallback(() => setMonth(month - 1), [month])
  const nextMonth = useCallback(() => setMonth(month + 1), [month])

  return (
    <YearMonthWrapper>
      <Icon type='left' onClick={prevMonth} />
      <StyledYearMonth>{`${year}년 ${month}월`}</StyledYearMonth>
      <Icon type='right' onClick={nextMonth} />
    </YearMonthWrapper>
  )
}

const Mode = () => {
  return (
    <ModeWrapper>
      <StyledMode>월</StyledMode>
      <StyledMode>주</StyledMode>
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
