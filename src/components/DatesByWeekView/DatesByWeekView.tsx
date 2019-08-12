import React from 'react'
import { getDate } from 'date-fns'

import { IDate } from '../MonthlyCalendarView/MonthlyCalendarView.spec'
import { DateBox, WeekDayOfDateBox, DayOfDateBox } from '../MonthlyCalendarView/MonthlyCalendarView.style'

import TimelineView from '../TimelineView'

import { useStore } from '../../store'

/* 주간 날짜 컴포넌트 */
const DatesByWeekView = (dates: IDate[], numOfWeek: number) => {
  const { mode } = useStore()

  return (
    dates.map(({ key, day }: any) => {
      if (numOfWeek === 0) {
        const weekdays = ["일", "월", "화", "수", "목", "금", "토"]
  
        return (
          <DateBox key={key}>
            <WeekDayOfDateBox>{weekdays[key]}</WeekDayOfDateBox>
            <DayOfDateBox onClick={ () => {} }>{`${getDate(day)}일`}</DayOfDateBox>
            { mode === 'month' ? <TimelineView /> : null }
          </DateBox>
        )
      }
  
      return (
        <DateBox key={key}>
          <DayOfDateBox>{`${getDate(day)}일`}</DayOfDateBox>
          {/* <TimelineView /> */}
        </DateBox>
      )
    })
  )
}

export default DatesByWeekView