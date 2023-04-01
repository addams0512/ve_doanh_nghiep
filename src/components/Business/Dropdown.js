import React from "react"
import "./Dropdown.css"
import { IoMdArrowDropdown } from "react-icons/io"
export default function Dropdown() {
	return (
		<div className="main-drop-down">
			<p>Tất cả</p>
			<IoMdArrowDropdown size={"22"} />

			<div className="dropdown-container">
				<div className="dropdown">
					<div className="dropdown-item">
						<input
							type="checkbox"
							className="checkbox-dropdown-item"></input>
						<div className="name-dropdown-item">Phân loại</div>
					</div>
					<div className="dropdown-item">
						<input
							type="checkbox"
							className="checkbox-dropdown-item"></input>
						<div className="name-dropdown-item">Phân loại</div>
					</div>
					<div className="dropdown-item">
						<input
							type="checkbox"
							className="checkbox-dropdown-item"></input>
						<div className="name-dropdown-item">Phân loại</div>
					</div>
					<div className="dropdown-item">
						<input
							type="checkbox"
							className="checkbox-dropdown-item"></input>
						<div className="name-dropdown-item">Phân loại</div>
					</div>
				</div>
			</div>
		</div>
	)
}
