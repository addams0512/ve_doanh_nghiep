import React, {
	useContext,
	useEffect,
	useRef,
	useState,
	createContext,
} from "react";

// component
import CreateTag from "./CreateTag";

// css
import "./CreatePlan.css";

// timepicker packages
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import moment from "moment";

// icon
import { IoLocationSharp } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import BasicCalendar from "./BasicCalendar";

// context
import {
	DayContext,
	PartnerContext,
	PlanContext,
} from "../../layouts/Calendar/CalendarLayout";
import { Partner } from "./Partner";
export const TagContext = createContext();

const CreatePlan = ({ remove }) => {
	// context-value
	const { finalData, setFinalData } = useContext(PlanContext);
	const { dayChosen, setDayChosen } = useContext(DayContext);
	const { partnerChoice } = useContext(PartnerContext);

	// state for context
	const [tagChoice, setTagChoice] = useState();

	// state
	const [content, setContent] = useState();
	const [dataNotice, setDataNotice] = useState();
	const [location, setLocation] = useState();
	const [alertExistDay, setAlertExistDay] = useState(false);

	// time-day picker
	// time
	const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"));
	const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"));
	const [alertExistingTime, setAlertExistingTime] = useState(false);

	const formatTime = (time) => {
		if (1 <= time <= 9) {
			return (time = time.toString().padStart(2, "0"));
		}
		return time;
	};

	const startHour = formatTime(startTime.$H);
	const endHour = formatTime(endTime.$H);
	const startMinute = formatTime(startTime.$m);
	const endMinute = formatTime(endTime.$m);
	const interValTime = `${startHour}:${startMinute} - ${endHour}:${endMinute}`;

	// day
	// get day - month - year
	const [displayDayPicker, setDisplayDayPicker] = useState(false);
	const day = dayChosen.getDate();
	const month = dayChosen.getMonth();
	const year = dayChosen.getFullYear();
	// format currentDay
	const date = moment(dayChosen).format("YYYY-MM-DD");
	// format T2-T3-T4-T5-T6-T7-CN to 1-2-3-4-5-6-7
	const dayOfWeek = dayChosen.getDay() % 7 || 7;
	// format day to Chủ nhật, Thứ 2, Thứ 3,...
	const getDayName = (date = dayChosen, locale = "vi-VN") => {
		return date.toLocaleDateString(locale, { weekday: "long" });
	};

	// show calendar
	const showDayPicker = () => {
		setDisplayDayPicker(!displayDayPicker);
	};

	// remove createPlan form
	const handleCancel = () => {
		remove();
	};

	// get Notices - Locations data
	const noticeData = (e) => {
		setDataNotice(e.target.value);
	};

	const onChangeLocation = (e) => {
		setLocation(e.target.value);
	};

	// outside click
	const refOne = useRef(null);
	const handleClickOutSide = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			remove();
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutSide, true);
	});

	// create plan
	const createPlan = (item) => {
		const nextId = finalData.length > 0 ? finalData.at(-1).id + 1 : 0;
		const existingPlan = finalData.find((plan) => plan.id === item.id);
		if (existingPlan) {
			return finalData.filter((plan) => plan.id !== item.id);
		}
		let dataArray = [
			...finalData,
			{
				id: nextId,
				content: content,
				tagChoice: tagChoice || { color: "black", name: "" }, // tag chosen
				date: date, // full date format YYYY-MM-DD
				intervalTime: interValTime, // time format HH:MM - HH:MM
				partner: partnerChoice, // array of partner
				location: location,
				note: dataNotice,
				planWeekDate: dayOfWeek, // day of week in format 1,2,3,4,5,6,7
				planTime: Number(interValTime.slice(0, 2)), // time format HH
				timePicker: interValTime.slice(0, 5), // time format HH:MM startTime
				day: day, // day in format with dayPicker
				month: month, // month of dayPicker
				year: year, // year of dayPicker
				completed: false,
				startTime: startTime,
				endTime: endTime,
				dayChosen: dayChosen,
			},
		];
		setFinalData(dataArray);
		remove();
	};

	// handle existing time
	const handleTime = (time, functionExist, functionSetTime) => {
		// check existing day
		const existingDay = finalData.some((plan) => {
			return plan.month === month && plan.year === year && plan.day === day;
		});

		// check existing time
		const hourExist = [];
		const minuteExist = [];
		finalData.map((plan) => {
			for (let i = plan.startTime?.$H; i < plan.endTime?.$H; i++) {
				hourExist.push(i);
			}
			for (let i = plan.startTime?.$m; i < plan.endTime?.$m; i++) {
				minuteExist.push(i);
			}
			return plan;
		});
		const existTime = hourExist.includes(time.$H);
		const existMinute = minuteExist.includes(time.$m);

		if (existTime && existMinute && existingDay) {
			functionExist(true);
			functionSetTime(time);
		} else {
			functionExist(false);
			functionSetTime(time);
		}
		setDisplayDayPicker(false);
	};

	const handleStartTime = (startTime) => {
		handleTime(startTime, setAlertExistingTime, setStartTime);
	};

	const handleEndTime = (endTime) => {
		handleTime(endTime, setAlertExistingTime, setEndTime);
	};

	// handle existing day
	const handleChooseDay = (e) => {
		const time = Array.from({ length: 23 }, (v, i) => i);

		// const fullPlanInDay = finalData
		const fullPlanOfDate = finalData.every((plan) => {
			return time.includes(plan.year, plan.month, plan.day);
		});

		if (fullPlanOfDate) {
			setDayChosen(e);
			setAlertExistDay(true);
		} else {
			setDayChosen(e);
			setAlertExistDay(false);
		}

		setDisplayDayPicker(false);
	};

	return (
		<TagContext.Provider value={{ tagChoice, setTagChoice }}>
			<div className="create-plan-container">
				<div
					ref={refOne}
					className="create-plan-box">
					<div className="create-plan-btn">Tạo kế hoạch</div>

					{/* content */}
					<input
						onChange={(e) => setContent(e.target.value)}
						className="name-create-plan-input"
						type="text"
						placeholder="Kế hoạch của bạn"
					/>

					{/* tag */}
					<div className="type-create-plan-container">
						<CreateTag />

						{/* date-time */}
						<div className="date-detail-create-plan-box">
							<div className="date-picker-box">
								<div>
									<FaCalendarAlt size={30} />
								</div>
								<div
									onClick={showDayPicker}
									className="date-detail-create-plan-container">
									{getDayName()}, {day} tháng {month + 1}, {year}
								</div>
								{alertExistDay && (
									<div style={{ color: "red" }}>
										Bạn đã đầy kế hoạch ở ngày này rồi!
									</div>
								)}
								{displayDayPicker && (
									<div className="calendar-picker-container">
										<div
											onClick={() => setDisplayDayPicker(false)}
											className="calendar-picker-cover"
										/>
										<div className="calendar-for-pickerDate">
											<BasicCalendar
												onChange={(e) => {
													handleChooseDay(e);
												}}
												value={dayChosen}
											/>
										</div>
									</div>
								)}
							</div>
							<div className="calendar-date-picker__container">
								<BsClockFill size={30} />
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={["TimePicker", "TimePicker"]}>
										<TimePicker
											sx={{
												backgroundColor: "#f0f0f0",
											}}
											label="Giờ bắt đầu"
											onChange={(startTime) => handleStartTime(startTime)}
										/>
										<TimePicker
											sx={{ backgroundColor: "#f0f0f0" }}
											label="Giờ kết thúc"
											onChange={(endTime) => handleEndTime(endTime)}
										/>
									</DemoContainer>
								</LocalizationProvider>
							</div>
							{alertExistingTime && (
								<div style={{ marginLeft: "50px", color: "red" }}>
									Bạn đã có kế hoạch ở thời gian này rồi!
								</div>
							)}
						</div>
					</div>

					{/* partner */}
					<Partner />

					{/* location  */}
					<div className="location-create-plan-container">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<IoLocationSharp size={30} />
						</div>
						<input
							onChange={onChangeLocation}
							placeholder="Vị trí"
							className="location-create-plan-box"></input>
					</div>

					{/* notice  */}
					<div className="notice-create-plan-container">
						<textarea
							onChange={noticeData}
							placeholder="Chú thích"></textarea>
					</div>

					{/* button  */}
					<div className="button-delete-create-plan-container">
						<button onClick={handleCancel}>Hủy</button>
						<button onClick={createPlan}>Tạo</button>
					</div>
				</div>
			</div>
		</TagContext.Provider>
	);
};

export default CreatePlan;
