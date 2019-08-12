import styled from "styled-components"
import { Icon } from "antd"

export const ControlViewWrapper = styled.header`
  display: flex;
  max-width: ${192 * 7}px
  justify-content: space-between;
  margin: 48px auto;
`

export const YearMonthWrapper = styled.div`
  display: flex;
`

export const StyledYearMonth = styled.h2`
  font-weight: bold;
  margin: auto;
`

export const ModeWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StyledIcon = styled(Icon)`
  font-size: 1.5em;
  align-self: center;
  margin: 0 16px;
  cursor: pointer;
  font-weight: bold;
`

export const StyledMode = styled.div`
  width: 64px;
  height: 32px;
  text-align: center;
  margin-right: 4px;
  font-size: 14px;
  line-height: 32px;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  background-color: ${({ selected }: any) => (selected ? "#fae903" : "#1E1E1E")}
  color: ${({ selected }: any) => (selected ? "#1e1e1e" : "#fff")}
  &:hover {
    background-color: rgba(250, 233, 3, .8);
    color: #1e1e1e;
  }
  &:active {
    background-color: #fae903;
  }
  &:last-child {
    margin-right: 0px;
  }
`
