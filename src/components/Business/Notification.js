import React from "react"
import "./Notification.css"
import notificationData from "../../data/notification"
import { useState } from "react"
const Notification = () => {
	const [selectedData, setSelectedData] = useState([])

	return (
		<>
			<div className="notifications">
				<div className="contents-f">
					<h3>Thông báo</h3>
				</div>
				<div className="content">
					{notificationData.map((elements, index) => {
						return (
							<div
								key={index}
								className="card">
								<div className="card-tag"></div>
								<h4>{elements.title}</h4>
								<div className="card-content">
									<div className="card-content-notification">
										<div className="avartar-notification"></div>
										<div className="action-notification">
											{elements.function}
										</div>
									</div>
									<div className="notification-content">
										<p>
											<b>{elements.name}</b> {elements.main}
										</p>
										<b>{elements.content}</b>
									</div>
								</div>
								<div className="time-notifcation">
									<p className="date-notification">{elements.date}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Notification
