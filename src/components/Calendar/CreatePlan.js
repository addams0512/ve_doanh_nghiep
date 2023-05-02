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
import { PlanContext } from "../../layouts/Calendar/CalendarLayout";
import { Partner } from "./Partner";
export const TagContext = createContext();
export const PartnerContext = createContext();

const CreatePlan = ({ remove }) => {
	// context-value
	const { finalData, setFinalData, dayChosen } = useContext(PlanContext);

	// state for context
	const [tagChoice, setTagChoice] = useState();
	const [partnerChoice, setPartnerChoice] = useState([]);

	// state
	const [content, setContent] = useState();
	const [dataNotice, setDataNotice] = useState();
	const [location, setLocation] = useState();

	// time-day picker
	// time
	const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"));
	const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"));
	const formatTime = (time) => {
		if (1 <= time <= 9) {
			return (time = time.toString().padStart(2, "0"));
		}
		return time;
	};
	const startHour = formatTime(startTime.$H);
	const startMinute = formatTime(startTime.$m);
	const endHour = formatTime(endTime.$H);
	const endMinute = formatTime(endTime.$m);
	const interValTime = `${startHour}:${startMinute} - ${endHour}:${endMinute}`;
	// day
	const [displayDayPicker, setDisplayDayPicker] = useState(false);
	const [dayPicker, setDayPicker] = useState(dayChosen);

	// get day - month - year
	const day = dayPicker.getDate();
	const month = dayPicker.getMonth();
	const year = dayPicker.getFullYear();

	// format currentDay
	const date = moment(dayPicker).format("YYYY-MM-DD");

	// format T2-T3-T4-T5-T6-T7-CN to 1-2-3-4-5-6-7
	const dayOfWeek = dayPicker.getDay() % 7 || 7;

	// format day to Chủ nhật, Thứ 2, Thứ 3,...
	const getDayName = (date = dayPicker, locale = "vi-VN") => {
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
				timePicker: interValTime.slice(0, 5), // time format HH:MM
				day: day, // day in format DD with dayPicker
				month: month, // month of dayPicker
				year: year, // year of dayPicker
				completed: false,
				startTime: startTime,
				endTime: endTime,
			},
		];
		setFinalData(dataArray);
		remove();
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

	return (
		<PartnerContext.Provider value={{ partnerChoice, setPartnerChoice }}>
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
										style={{ cursor: "pointer" }}
										onClick={showDayPicker}
										className="date-detail-create-plan-container">
										{getDayName()}, {day} tháng {month + 1}, {year}
									</div>
									{displayDayPicker && (
										<div className="calendar-picker-container">
											<div
												onClick={() => setDisplayDayPicker(false)}
												className="calendar-picker-cover"
											/>
											<div className="calendar-for-pickerDate">
												<BasicCalendar
													onChange={(e) => {
														setDayPicker(e);
														setDisplayDayPicker(false);
													}}
													value={dayPicker}
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
												onChange={(startTime) => setStartTime(startTime)}
											/>
											<TimePicker
												sx={{ backgroundColor: "#f0f0f0" }}
												label="Giờ kết thúc"
												onChange={(endTime) => setEndTime(endTime)}
											/>
										</DemoContainer>
									</LocalizationProvider>
								</div>
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
		</PartnerContext.Provider>
	);
};

export default CreatePlan;
