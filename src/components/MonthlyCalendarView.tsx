import React from 'react'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, getDate } from 'date-fns'
import styled from 'styled-components'

import { dateBetweenFromTo, weekBetweenFromTo } from '../utils'
import { IDate } from './MonthlyCalendarView.spec'
import { useStore } from '../store'

const MonthlyCalendarViewWrapper = styled.div`
  width: 100%;
`

const WeekDaysWrapper = styled.div`
  display: flex;
`

const WeekDay = styled.div``

const WeekDatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Week = styled.div`
  display: flex;
`

const Date = styled.div`
`

/* 주간 날짜 컴포넌트 */
const DatesByWeekView = (dates: IDate[]) => dates.map(({ key, day }) => <Date key={ key }>{ getDate(day) }</Date>)

const MonthlyCalendarView = () => {
  const { month, year } = useStore()

  const startDay = startOfWeek(startOfMonth(`${ year }-${ month }`))
  const endDay = endOfWeek(endOfMonth(`${ year }-${ month }`))

  const dates = dateBetweenFromTo(startDay, endDay)  
  const weeks = weekBetweenFromTo(dates, 7)
  
  const numOfWeeks = Math.floor(dates.length / 7)
  
  return (
    <MonthlyCalendarViewWrapper>
      <WeekDaysWrapper>
        {
          ['일', '월', '화', '수', '목', '금', '토'].map(weekday => <WeekDay key={ weekday }>{ weekday }</WeekDay>)
        }
      </WeekDaysWrapper>
      <WeekDatesWrapper>
        {
          Array( numOfWeeks ).fill(0).map((n, i) => <Week key={ n + i }>{ DatesByWeekView(weeks[n + i]) }</Week>)
        }
      </WeekDatesWrapper>
    </MonthlyCalendarViewWrapper>
  )
}

export default MonthlyCalendarView
