import React, { createContext } from "react"
import Calendar, { MonthView } from "react-calendar"
import "./BasicCalendar.css"
import { useContext } from "react"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"

export const CalendarDay = createContext()

export default function BasicCalendar({ year, view, onChange, value, month }) {
	const { finalData, setFinalData } = useContext(PlanContext)
	const arrayOfDatePlan = finalData.map((s) => {
		return s.date
	})
	console.log({ arrayOfDatePlan })
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
				tileClassName={({ date }) => {
					let day = date.getDate()
					let month = date.getMonth() + 1
					if (date.getMonth() < 10) {
						month = "0" + month
					}
					if (date.getDate() < 10) {
						day = "0" + day
					}
					const realDate = date.getFullYear() + "-" + month + "-" + day
					if (arrayOfDatePlan.find((s) => s === realDate)) {
						return "highlight"
					}
				}}
			/>
		</>
	)
}
