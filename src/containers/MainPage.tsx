import React from "react"
import styled from "styled-components"

import ControlView from "../components/ControlView"
import MonthlyCalendarView from "../components/MonthlyCalendarView"
import WeeklyCalendarView from "../components/WeeklyCalendarView"

import { useStore } from "../store"

const MainPageWrapper = styled.div``

const MainPage = () => {
  const { mode } = useStore()

  return (
    <MainPageWrapper>
      <ControlView />
      {
        mode === 'week' ? <WeeklyCalendarView /> : <MonthlyCalendarView />
      }
    </MainPageWrapper>
  )
}

export default MainPage
