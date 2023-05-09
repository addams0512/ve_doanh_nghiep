import React from "react";
import Sidebar from "../components/Sidebar";
import "./CalendarPages.css";
import CalendarLayout from "../layouts/Calendar/CalendarLayout";
const CalendarPages = () => {
	return (
		<div className="calendar-page">
			<Sidebar />
			<CalendarLayout />
		</div>
	);
};

export default CalendarPages;
