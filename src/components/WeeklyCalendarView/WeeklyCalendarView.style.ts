import styled from "styled-components"

export const WeeklyCalendarViewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const WeekDaysWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
`

export const DayWrapper = styled.div``

export const TimeTableWrapper = styled.div`
  display: flex;
`

export const TimelineWrapper = styled.ul`
  border-left: 1px solid #ccc;
  width: 192px;
  &:last-child {
    border-right: 1px solid #ccc;
  }
  border-bottom: 1px solid #ccc;
  padding: 0 5px;
`

export const Time = styled.li`
  list-style-type: none;
  height: 48px;
  line-height: 48px;
`
