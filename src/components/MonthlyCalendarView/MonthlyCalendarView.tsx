import React from "react"
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek
} from "date-fns"

import {
  MonthlyCalendarViewWrapper,
  WeekDatesWrapper,
  Week
} from "./MonthlyCalendarView.style"

import DatesByWeekView from '../DatesByWeekView'

import { useStore } from "../../store"
import { dateBetweenFromTo, weekBetweenFromTo } from "../../utils"

const MonthlyCalendarView = () => {
  const { month, year } = useStore()

  const startDay = startOfWeek(startOfMonth(`${year}-${month}`))
  const endDay = endOfWeek(endOfMonth(`${year}-${month}`))

  const dates = dateBetweenFromTo(startDay, endDay)
  const weeks = weekBetweenFromTo(dates, 7)

  const numOfWeeks = Math.floor(dates.length / 7)

  return (
    <MonthlyCalendarViewWrapper>
      <WeekDatesWrapper>
        {Array(numOfWeeks)
          .fill(0)
          .map((n, i) => (
            <Week key={n + i}>{DatesByWeekView(weeks[n + i], n + i)}</Week>
          ))}
      </WeekDatesWrapper>
    </MonthlyCalendarViewWrapper>
  )
}

export default MonthlyCalendarView
