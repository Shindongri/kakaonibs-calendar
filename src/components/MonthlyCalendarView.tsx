import React from 'react'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, differenceInDays, addDays, getDate } from 'date-fns'
import styled from 'styled-components'

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

interface IDate {
  key: number,
  day: Date
}

/* 시작일, 종료일 사이의 날짜 데이터 반환 */
const dateBetweenFromTo = (startDay: Date, endDay: Date) => [...Array( differenceInDays(endDay, startDay) + 1 )].fill(0).map((n, i) => ({ key: (n + i), day: addDays(startDay, (n + i)) }))

/* 날짜 데이터를 주 단위로 분할 */
const weekBetweenFromTo = (dates: IDate[], interval: number) => [...Array( Math.floor(dates.length / interval) )].fill(0).map((n, i) => dates.slice(interval * (n + i), interval * (n + i + 1)))

/* 주간 날짜 컴포넌트 */
const DatesByWeekView = (dates: IDate[]) => dates.map(({ key, day }) => <Date key={ key }>{ getDate(day) }</Date>)

const MonthlyCalendarView = () => {
  const startDay = startOfWeek(startOfMonth('2019-08'))
  const endDay = endOfWeek(endOfMonth('2019-08'))

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
