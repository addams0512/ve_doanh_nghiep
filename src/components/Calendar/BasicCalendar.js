import React, { createContext } from "react"
import Calendar from "react-calendar"
import "./BasicCalendar.css"

export const CalendarDay = createContext()

export default function BasicCalendar({ view, onChange, value, month }) {
	return (
		<>
			<Calendar
				view={view}
				onChange={onChange}
				value={value}
				month={month}
			/>
		</>
	)
}
