import React, { createContext } from "react"
import Calendar, { MonthView } from "react-calendar"
import "./BasicCalendar.css"
import { useContext } from "react"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"

export const CalendarDay = createContext()

export default function BasicCalendar({ year, view, onChange, value, month }) {
	const { finalData, setFinalData } = useContext(PlanContext)
	const startDate = new Date(year, month - 1, 1)
	const endDate = new Date(year, month - 1, startDate.getDate() + 41)

	function tileClassName({ date }) {
		const arrayOfDatePlan = finalData.map((s) => {
			return new Date(s.date)
		})

		const test = arrayOfDatePlan.find((plan) => plan === date)

		return "highlight"
	}

	return (
		<>
			<Calendar
				date={startDate}
				minDate={startDate}
				maxDate={endDate}
				view={view}
				onChange={onChange}
				value={value}
				month={month}
				tileClassName={tileClassName}
			/>
		</>
	)
}
