import { differenceInDays, differenceInHours, addDays, addHours } from 'date-fns'
import { IDate } from '../components/MonthlyCalendarView/MonthlyCalendarView.spec'

/* 시작일, 종료일 사이의 날짜 데이터 반환 */
export const dateBetweenFromTo = (startDay: Date, endDay: Date) => [...Array( differenceInDays(endDay, startDay) + 1 )].fill(0).map((n, i) => ({ key: (n + i), day: addDays(startDay, (n + i)) }))

/* 날짜 데이터를 주 단위로 분할 */
export const weekBetweenFromTo = (dates: IDate[], interval: number) => [...Array( Math.floor(dates.length / interval) )].fill(0).map((n, i) => dates.slice(interval * (n + i), interval * (n + i + 1)))

/* 시작시간, 종료시간 사이의 타임라인 데이터 반환 */
export const timelineBetweenFromTo = (startTime: Date, endTime: Date) => [...Array( differenceInHours(endTime, startTime) + 1 )].fill(0).map((n, i) => ({ key: (n + i), hour: addHours(startTime, (n + i)) }))