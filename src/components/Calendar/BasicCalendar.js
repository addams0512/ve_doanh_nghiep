import React, { createContext, useState } from "react";
import Calendar, { MonthView } from "react-calendar";
import "./BasicCalendar.css";
import { useContext } from "react";
import { PlanContext } from "../../layouts/Calendar/CalendarLayout";
export const CalendarDay = createContext();

export default function BasicCalendar({ year, view, onChange, value, month }) {
	return (
		<>
			<Calendar
				view={view}
				onChange={onChange}
				value={value}
				month={month}
			/>
		</>
	);
}
