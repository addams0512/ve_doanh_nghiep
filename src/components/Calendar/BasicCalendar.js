import React, { createContext } from "react"
import Calendar from "react-calendar"
import "./BasicCalendar.css"

export const CalendarDay = createContext()

export default function BasicCalendar({ onChange, value, month }) {
	return (
		<>
			<Calendar
				onChange={onChange}
				value={value}
				month={month}
			/>
		</>
	)
}
