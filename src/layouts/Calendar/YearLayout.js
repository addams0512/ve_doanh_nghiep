import React, { useContext, useState } from "react"
import { Calendar, CalendarControls } from "react-yearly-calendar"
import "./YearLayout.css"
import { PlanContext } from "./CalendarLayout"
import { IoCaretBackOutline } from "react-icons/io5"
import YearlyCalendar2 from "../../components/Calendar/YearlyCalendar2"
import YearlyCalendar from "../../components/Calendar/YearlyCalendar"

export default function YearLayout() {
	const currentYear = new Date().getFullYear()
	const [year, setYear] = useState(currentYear)
	const { finalData, setFinalData } = useContext(PlanContext)
	const date = new Date()
	const handlePrevYear = () => {
		setYear((year) => year - 1)
	}
	const handleNextYear = () => {
		setYear((year) => year + 1)
	}

	return (
		<div className="yearly__calendar__container">
			<div className="btn-nav__yearly__container">
				<button onClick={handlePrevYear}>
					<IoCaretBackOutline />
				</button>
				<p>{year}</p>
				<button onClick={handleNextYear}>
					<IoCaretBackOutline style={{ transform: "rotate(180deg)" }} />
				</button>
			</div>
			<Calendar
				year={year}
				selectedDay={date}
			/>
		</div>
	)
}
