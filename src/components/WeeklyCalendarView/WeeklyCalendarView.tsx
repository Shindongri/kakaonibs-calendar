import React, { useState } from 'react'
import { startOfWeek, endOfWeek, getHours, getDate, parse, format } from 'date-fns'

// import DatesByWeekView from '../DatesByWeekView'

import { dateBetweenFromTo, timelineBetweenFromTo } from '../../utils'
import { useStore } from '../../store'
import { WeeklyCalendarViewWrapper, TimeTableWrapper, TimelineWrapper, Time, WeekDaysWrapper } from './WeeklyCalendarView.style'

const WeeklyCalendarView = () => {
  const { month, year, day } = useStore()

  const [startDayOfWeek] = useState<Date>(startOfWeek(new Date(year, month)))
  const [endDayOfWeek] = useState<Date>(endOfWeek(new Date(year, month)))
  const [startTimeOfDay] = useState<Date>(parse(`${ format(`${ year }-${ month }-${ day }`, 'YYYY-MM-DD') }T10:00:00`))
  const [endTimeOfDay] = useState<Date>(parse(`${ format(`${ year }-${ month }-${ day }`, 'YYYY-MM-DD') }T23:59:59`))

  const dates = dateBetweenFromTo(startDayOfWeek, endDayOfWeek)
  const timelines = timelineBetweenFromTo(startTimeOfDay, endTimeOfDay)

  return (
    <WeeklyCalendarViewWrapper>
    {
      dates.map(({ key, day }) => (
      <div>
      { getDate(day) }
      </div>
      ))
    }
    {
      timelines.map(({ key, hour }) => (
      <div key={ key }>
      { getHours(hour) }
      </div>
      ))
      }
      <TimeTableWrapper>
        <div></div>
       
        {/* {
          dates.map(({ key, day }) => (
            <TimelineWrapper key={ key }>
            {
              timelineBetweenFromTo(startTimeOfDay, endTimeOfDay).map(({ key, hour }) => <Time key={ key }>{ getHours(hour) < 12 ? `오전 ${ getHours(hour) }시` : `오후 ${ getHours(hour) }시` }</Time>)
            }
            </TimelineWrapper>
          ))
        } */}
      </TimeTableWrapper>
    </WeeklyCalendarViewWrapper>
  )
}

export default WeeklyCalendarView