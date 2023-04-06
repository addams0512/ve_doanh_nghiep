import React, { createContext } from "react"
import Calendar from "react-calendar"
import "./BasicCalendar.css"
import { useState } from "react"
export default function BasicCalendar() {
	const [value, onChange] = useState(new Date())

	return (
		<>
			<Calendar
				onChange={onChange}
				value={value}
			/>
		</>
	)
}
