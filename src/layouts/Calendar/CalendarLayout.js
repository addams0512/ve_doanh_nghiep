import React from "react"
import "./CalendarLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { AiOutlineSearch } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx"
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
					<div className="type-plan-calendar-container">
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
				</div>
				<div className="next-plan-calendar">
					<div className="next-plan-calendar-container">
						<div className="title-next-plan-calender">Kế hoạch sắp tới</div>
						<div className="detail-next-plan-calendar-container">
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="box2-calendar">
				<div className="container-box2-plan">
					<div className="time-type-calendar">
						<button>Ngày</button>
						<button>Tuần</button>
						<button>Tháng</button>
						<button>Năm</button>
					</div>
					<div className="btn-search-calendar">
						<AiOutlineSearch size={20} />
						<input
							type="text"
							placeholder="Tìm sự kiện"
						/>
					</div>
				</div>
				<div className="btn-date-calendar">
					<button>CN</button>
					<button>T2</button>
					<button>T3</button>
					<button>T4</button>
					<button>T5</button>
					<button>T6</button>
					<button>T7</button>
				</div>
				<div className="plan-calendar">
					<div className="plan-calendar-container">
						<div className="detail-plan-calendar">
							<div className="detail-plan-calendar-container">
								<div className="specific-time-plan-calendar">9:00 AM</div>
								<div className="content-detail-plan-calendar">
									<div className="tag-detail-plan-calendar"></div>
									<div className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											Họp cùng sales team
										</div>
										<div className="time-detail-plan-calendar">9:00 - 9:30</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
							<div className="detail-plan-calendar-container">
								<div className="specific-time-plan-calendar">10:00 AM</div>

								<div className="content-detail-plan-calendar">
									<div className="tag-detail-plan-calendar"></div>
									<div className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											Họp cùng sales team
										</div>
										<div className="time-detail-plan-calendar">9:00 - 9:30</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
							<div className="detail-plan-calendar-container">
								<div className="specific-time-plan-calendar">11:00 AM</div>

								<div className="content-detail-plan-calendar">
									<div className="tag-detail-plan-calendar"></div>
									<div className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											Họp cùng sales team
										</div>
										<div className="time-detail-plan-calendar">9:00 - 9:30</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
							<div className="detail-plan-calendar-container">
								<div className="specific-time-plan-calendar">12:00 AM</div>

								<div className="content-detail-plan-calendar">
									<div className="tag-detail-plan-calendar"></div>
									<div className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											Họp cùng sales team
										</div>
										<div className="time-detail-plan-calendar">9:00 - 9:30</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
							<div className="detail-plan-calendar-container">
								<div className="specific-time-plan-calendar">10:00 AM</div>

								<div className="content-detail-plan-calendar">
									<div className="tag-detail-plan-calendar"></div>
									<div className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											Họp cùng sales team
										</div>
										<div className="time-detail-plan-calendar">9:00 - 9:30</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalendarLayout
