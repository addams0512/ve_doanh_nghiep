import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import YourBusiness from "../layouts/Business/YourBusiness"
import "./DoanhNghiepPage.css"
import CreateBusiness from "../layouts/Business/CreateBusiness"
const DoanhNghiepPage = () => {
	const [isCreateBusiness, setIsCreateBusiness] = useState(false)
	const [isYourBusiness, setIsYourBusiness] = useState(true)
	return (
		<div className="business-page">
			<Sidebar />
			{isYourBusiness && (
				<YourBusiness
					createBusinessPage={() => {
						setIsCreateBusiness(true)
						setIsYourBusiness(false)
					}}
				/>
			)}
			{isCreateBusiness && <CreateBusiness />}
		</div>
	)
}

export default DoanhNghiepPage
