import React from "react"
import { Calendar, CalendarControls } from "react-yearly-calendar"
import "./YearLayout.css"
export default function YearLayout() {
	const date = new Date().getFullYear()
	return (
		<div className="yearly__calendar__container">
			<Calendar year={date} />,
		</div>
	)
}
