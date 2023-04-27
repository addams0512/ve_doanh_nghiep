import React, { useContext, useEffect, useState } from "react"
import dayjs from "dayjs"
import "./TimePicker.css"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { TimeContext } from "./CreatePlan"

const BasicTimePicker = () => {
	const { setTimePicker } = useContext(TimeContext)
	const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"))
	const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"))
	const formatTime = (time) => {
		if (1 <= time <= 9) {
			return (time = time.toString().padStart(2, "0"))
		}
		return time
	}
	const startHour = formatTime(startTime.$H)
	const startMinute = formatTime(startTime.$m)
	const endHour = formatTime(endTime.$H)
	const endMinute = formatTime(endTime.$m)
	const interValTime = `${startHour}:${startMinute} - ${endHour}:${endMinute}`
	useEffect(() => setTimePicker(interValTime), [interValTime])

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["TimePicker", "TimePicker"]}>
				<TimePicker
					sx={{ backgroundColor: "#f0f0f0" }}
					label="Giờ bắt đầu"
					onChange={(startTime) => setStartTime(startTime)}
				/>
				<TimePicker
					sx={{ backgroundColor: "#f0f0f0" }}
					label="Giờ kết thúc"
					onChange={(endTime) => setEndTime(endTime)}
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}

export default BasicTimePicker
