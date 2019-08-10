import React, { useState } from 'react'
import { startOfWeek, endOfWeek, getDate, getHours, parse, format } from 'date-fns'
import styled from 'styled-components'

import { dateBetweenFromTo, timelineBetweenFromTo } from '../utils'
import { useStore } from '../store'

const WeeklyCalendarViewWrapper = styled.div`

`
const WeekDaysWrapper = styled.div`
  display: flex;
`

const DayWrapper = styled.div``

const TimeTableWrapper = styled.div`
  display: flex;
`

const TimelineWrapper = styled.ul``

const Time = styled.li``

const WeeklyCalendarView = () => {
  const { month, year, day } = useStore()

  const [startDayOfWeek] = useState<Date>(startOfWeek(new Date(year, month)))
  const [endDayOfWeek] = useState<Date>(endOfWeek(new Date(year, month)))
  const [startTimeOfDay] = useState<Date>(parse(`${ format(`${ year }-${ month }-${ day }`, 'YYYY-MM-DD') }T10:00:00`))
  const [endTimeOfDay] = useState<Date>(parse(`${ format(`${ year }-${ month }-${ day }`, 'YYYY-MM-DD') }T23:59:59`))

  const dates = dateBetweenFromTo(startDayOfWeek, endDayOfWeek)

  return (
    <WeeklyCalendarViewWrapper>
       <WeekDaysWrapper>
         {
           dates.map(({ key, day }) => (
            <DayWrapper key={ key }>
            
            { getDate(day) }
            </DayWrapper>
           ))
         }
      </WeekDaysWrapper>
      <TimeTableWrapper>
        {
          dates.map(({ key, day }) => (
            <TimelineWrapper key={ key }>
            {
              timelineBetweenFromTo(startTimeOfDay, endTimeOfDay).map(({ key, hour }) => <Time key={ key }>{ getHours(hour) }</Time>)
            }
            </TimelineWrapper>
          ))
        }
      </TimeTableWrapper>
    </WeeklyCalendarViewWrapper>
  )
}

export default WeeklyCalendarView