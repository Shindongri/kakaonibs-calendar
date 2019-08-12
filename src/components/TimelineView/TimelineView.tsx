import React, { useCallback } from 'react'

import { useDispatch } from '../../store'
import { SET_SHOW_POPUP } from '../../reducer'

import {
  TimelineWrapper,
  Timeline,
  StartTime,
  TimelineTitle
} from "../MonthlyCalendarView/MonthlyCalendarView.style"

const TimelineView = () => {
  const dispatch = useDispatch()

  const openEditPopup = useCallback(() => dispatch({ type: SET_SHOW_POPUP, payload: true }), [])

  return (
    <TimelineWrapper>
      <Timeline onClick={() => openEditPopup()}>
        <StartTime>오후 7시</StartTime>
        <TimelineTitle>회식이다아아앙아아아회식이다아아앙아아아회식이다아아앙아아아회식이다아아앙아아아회식이다아아앙아아아회식이다아아앙아아아</TimelineTitle>
      </Timeline>

      <Timeline onClick={() => openEditPopup()}>
        <StartTime>오후 7시</StartTime>
        <TimelineTitle>회식</TimelineTitle>
      </Timeline>
    </TimelineWrapper>
  )
}
export default TimelineView