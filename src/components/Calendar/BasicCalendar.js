import React, { createContext } from "react"
import Calendar from "react-calendar"
import "./BasicCalendar.css"

export const CalendarDay = createContext()

export default function BasicCalendar({ year, view, onChange, value, month }) {
	const startDate = new Date(year, month - 1, 1)
	const endDate = new Date(year, month - 1, startDate.getDate() + 41)
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
			/>
		</>
	)
}
