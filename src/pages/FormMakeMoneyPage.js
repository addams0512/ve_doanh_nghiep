import React from "react"
import Sidebar from "../components/Sidebar"
import "./FormMakeMoneyPage.css"
import FormMakeMoneyLayouts from "../layouts/FormMakeMoney/FormMakeMoneyLayouts"

const CalendarPages = () => {
	return (
		<div className="form-make-money-page">
			<Sidebar />
			<FormMakeMoneyLayouts />
		</div>
	)
}

export default CalendarPages
