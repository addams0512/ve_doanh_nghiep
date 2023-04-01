import React from "react"
import AboutBusiness from "../../components/Business/AboutBusiness"
import Notification from "../../components/Business/Notification"
import "./CreateBusiness.css"
const CreateBusiness = () => {
	return (
		<div className="create-business-page">
			<AboutBusiness />
			<Notification />
		</div>
	)
}

export default CreateBusiness
