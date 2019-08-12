import styled from 'styled-components'

export const MonthlyCalendarViewWrapper = styled.div``

export const WeekDaysWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const WeekDay = styled.div`
  width: 192px;
  height: 64px;
  padding: 10px;
  line-height: 44px;
  box-sizing: border-box;
  text-align: right;
  align-self: center;
  font-weight: bold;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  &:last-child {
    border-right: 1px solid #ccc;
  }
`

export const WeekDatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Week = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`

export const DateBox = styled.div`
  width: 192px;
  height: 128px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: right;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ccc;
  &:last-child {
    border-right: 1px solid #ccc;
  }
  // @media (max-width: 375px) {
  // }
`

export const WeekDayOfDateBox = styled.div`
  font-weight: bold;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
`

export const DayOfDateBox = styled.div`
  padding: 5px 10px 0;
`

export const TimelineWrapper = styled.ol`
  list-style-type: circle;
  overflow: auto;
  text-align: left;
  padding: 10px;
`

export const Timeline = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: rgba(250, 233, 3, .8);
    color: #1e1e1e;
    font-weight: bold;
  }
`

export const StartTime = styled.time`
  white-space: nowrap;
  margin-right: 5px;
  font-size: 12px;
  line-height: 21px;
  color: #666666;
`

export const TimelineTitle = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`