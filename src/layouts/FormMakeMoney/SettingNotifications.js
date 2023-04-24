import React, { useState } from "react"
import "./SettingNotifications.css"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { notidata } from "../../data/notidata"
import { BsSearch } from "react-icons/bs"
export default function SettingNotifications() {
	const [notificationsDisplay, setNotificationsDisplay] = useState(false)
	const [sortcustomername, setSortCustomerName] = useState(false)
	const [closedfilenoti, setClosedFileNoti] = useState(notidata)
	const [filterdata, setFilterData] = useState(notidata)
	function showPropUp() {
		setNotificationsDisplay(true)
	}
	function showPropUp() {
		setSortCustomerName(!sortcustomername)
	}

	// function closedFile(id) {
	//   setClosedFileNoti(
	//     filterOutData.map((sd) => {
	//       let value = false;
	//       if (id === sd.id) {
	//         sd.onClose = false;
	//       }
	//       return sd;
	//     })
	//   );
	// }
	// const filterOutData = closedfilenoti.filter((item) => {
	//   return item.onClose;
	// });

	return (
		<div className="cotainer-notifi">
			<div className="notifi-heading">
				<div className="tittle-notifi">
					<div className="tittle-notifi-1">THÔNG BÁO</div>
					<div className="tittle-notifi-2">LỊCH SỬ THÔNG BÁO</div>
				</div>
				<div className="option-notifi">
					<div className="notifi-search-bar">
						<div className="notifi-icon-search">
							<BsSearch />
						</div>
						<input
							type="text"
							placeholder="Tìm kiếm"
							className="notifi-search"></input>
					</div>
					<div className="notifi-change">
						<div className="notifi-change-info">Short by:</div>
						<div className="notifi-change-info-1">Priority</div>
						<div className="notifi-change-info-icon">
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
			</div>
			<div className="notifi-body">
				<div className="notifi-body-tittle">
					<div className="notifi-body-tittle-1">
						<p>Tên khách hàng</p>{" "}
						<div
							onClick={showPropUp}
							className="notifi-body-tittle-icon">
							{sortcustomername ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
						</div>
					</div>
					<div className="notifi-body-tittle-1">
						<p>Môn học</p>{" "}
						<div className="notifi-body-tittle-icon">
							<IoMdArrowDropdown />
						</div>
					</div>
					<div className="notifi-body-tittle-1">
						<p>Gửi tới</p>{" "}
						<div className="notifi-body-tittle-icon">
							<IoMdArrowDropdown />
						</div>
					</div>
					<div className="notifi-body-tittle-1">
						<p>Thời gian gửi</p>{" "}
						<div className="notifi-body-tittle-icon">
							<IoMdArrowDropdown />
						</div>
					</div>
					<div className="notifi-body-tittle-1">
						<p>Trạng thái</p>
						<div className="notifi-body-tittle-icon">
							<IoMdArrowDropdown />
						</div>
					</div>
				</div>
				<div>
					{closedfilenoti.map((element) => {
						return (
							<div className="notifi-body-content">
								<div className="notifi-name-customer">
									{element.customername}
								</div>
								<div className="notifi-subject">
									<div className="notifi-subject-tittle">{element.subject}</div>
									<div className="notifi-subject-content">
										{element.contentsub}
									</div>
								</div>
								<div className="notifi-assigned">
									<div className="notifi-assigned-avatar"></div>
									<div className="notifi-assigned-info">
										<div className="notifi-assigned-name">
											{element.namesend}
										</div>
										<div className="notifi-assigned-job">{element.job}</div>
									</div>
								</div>
								<div className="notifi-Watting">{element.time}</div>
								<div className="notifi-status">
									<div
										// onClick={() => {
										//   closedFile(element.id);
										// }}
										className="notifi-status-option">
										{element.status}
									</div>
									<div className="notifi-status-icon">
										<BiDotsVerticalRounded />
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="notifi-bottom">
				Hiển thị vé 1 đến 5 trong tổng số 256 nghìn mục nhập
			</div>
		</div>
	)
}
