import React from "react"
import "./CalendarLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
const CalendarLayout = () => {
	return (
		<div className="container-calendar">
			<div className="box1-calendar">
				<div className="date-calendar">
					<h1>16</h1>
					<p>Tháng 7, 2022</p>
				</div>
				<div className="add-plan-calendar">
					<button>Thêm kế hoạch</button>
				</div>
				<div className="display-calendar">
					<BasicCalendar />
				</div>
				<div className="type-plan-calendar">
					<div className="title-type-plan-calendar">
						<p> Loại kế hoạch</p>
					</div>
					<div className="description-type-plan-calendar">
						<div className="description-type-plan-container">
							<div className="color-descrtiption-type-plan"></div>
							<div className="description-type-plan">Công việc</div>
						</div>
						<div className="description-type-plan-container">
							<div className="color-descrtiption-type-plan"></div>
							<div className="description-type-plan">Vợ</div>
						</div>
						<div className="description-type-plan-container">
							<div className="color-descrtiption-type-plan"></div>
							<div className="description-type-plan">Công việc</div>
						</div>
						<div className="description-type-plan-container">
							<div className="color-descrtiption-type-plan"></div>
							<div className="description-type-plan">Công việc</div>
						</div>
						<div className="description-type-plan-container">
							<div className="color-descrtiption-type-plan"></div>
							<div className="description-type-plan">Công việc</div>
						</div>
					</div>
				</div>
				<div className="next-plan-calendar">1.5</div>
			</div>
			<div className="box2-calendar">
				<div className="container-box2-plan">
					<div className="time-type-calendar">2.1.1</div>
					<div className="btn-search-calendar">2.1.2</div>
				</div>
				<div className="date-calendar">2.2</div>
				<div className="plan-calendar">2.3</div>
			</div>
		</div>
	)
}

export default CalendarLayout
