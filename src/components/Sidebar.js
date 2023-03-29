import React, { useState, useEffect } from "react"
import "./Sidebar.css"
import { AiFillMessage } from "react-icons/ai"
import { IoMdSettings } from "react-icons/io"
import { GrNotification } from "react-icons/gr"
import { FaBusinessTime } from "react-icons/fa"
import {
	FcSpeaker,
	FcInTransit,
	FcBarChart,
	FcHome,
	FcWebcam,
	FcPlanner,
	FcBusiness,
	FcConferenceCall,
	FcAbout,
	FcGraduationCap,
	FcDataSheet,
	FcLeave,
	FcStackOfPhotos,
	FcAutomotive,
	FcGlobe,
	FcShipped,
	FcDepartment,
	FcShop,
	FcElectricity,
	FcTimeline,
	FcSearch,
	FcDownLeft,
} from "react-icons/fc"
import { MdOutlineArrowDropDown } from "react-icons/md"
// import money from "./MoneyIcon.png"
import { NavLink } from "react-router-dom"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { BiBuildingHouse } from "react-icons/bi"
export default function Sidebar({ user }) {
	const { pathname } = useLocation()

	const [loading, setLoading] = useState(false)
	const [userData, setUserData] = useState([])
	const navigate = useNavigate()

	// useEffect(() => {
	//     if (user) {
	//         db.collection("dw-users").doc(user.email).get().then((doc) => {
	//             if (doc.exists) {
	//                 setUserData(doc.data());
	//             }
	//         })
	//     }
	// }, [user])
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<div className="sidebar-user-info">
					{/* <img
						className="sidebar-picture"
						src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/277674304_3148827845361907_4795417363120274067_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3ZbUMvMBHBUAX_dGIsQ&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_H9-o9B0hAO5amJ9JdnzAQYpThPIiaWKafdKRINzF-VA&oe=6340874F"
					/> */}
					<h3>{userData.displayName}</h3>
					<p>{userData.major}</p>
					<div className="sidebar-user-info-button">
						<div className="sidebar-user-info-text">
							<h5>Kiếm tiền</h5>
						</div>
					</div>
					<div className="sidebar-user-info-control">
						<div className="sidebar-user-control-icon">
							<GrNotification size={20} />
						</div>
						<div className="sidebar-user-control-icon">
							<FaBusinessTime size={20} />
						</div>
						<div className="sidebar-user-control-icon">
							<IoMdSettings size={23} />
						</div>
						<div className="sidebar-user-control-icon">
							<MdOutlineArrowDropDown size={23} />
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div
					className="dw-header-left-logo"
					onClick={() => navigate("/")}>
					<h1>DW</h1>
				</div>
				<div className="dw-header-left-search">
					<FcSearch
						style={{ position: "absolute", marginLeft: 5 }}
						size={23}
					/>
					<input
						type="text"
						placeholder="Tìm kiếm"
					/>
				</div>
			</div>
			<p
				style={{
					marginLeft: 20,
					fontSize: 12,
					fontWeight: 600,
					color: "dimgray",
				}}>
				Nguồn lực
			</p>
			<div className="sidebar-column-menu">
				{/* <NavLink to="/home" activeClassName="active" className="sidebar-column-menu-option">
                    <FcHome size={25} className="nav-icon" />
                    <h5>Nhà của Tôi</h5>
                </NavLink>
                <NavLink exact to="/news" activeClassName="active" className="sidebar-column-menu-option">
                    <FcGlobe size={25} className="nav-icon" />
                    <h5>Thế giới</h5>
                </NavLink>
                <NavLink exact to="/business" className="sidebar-column-menu-option">
                    <FcBusiness size={25} className="nav-icon" />
                    <h5>Doanh nghiệp</h5>
                </NavLink>
                <NavLink exact to="/ads" className="sidebar-column-menu-option">
                    <FcSpeaker size={25} className="nav-icon" />
                    <h5>Quảng cáo</h5>
                </NavLink>
                <NavLink exact to="/commercial" activeClassName="active" className="sidebar-column-menu-option">
                    <FcBusiness size={25} className="nav-icon" />
                    <h5>Thị trường</h5>
                </NavLink>
                <NavLink exact to="/friend" activeClassName="active" className="sidebar-column-menu-option">
                    <FcConferenceCall size={25} className="nav-icon" />
                    <h5>Mối quan hệ</h5>
                </NavLink> */}
				<NavLink
					// exact
					// to="/booked"
					// isActive={() =>
					// 	["/booked", "/booked/shipment", "/booked/saved"].includes(pathname)
					// }
					// activeClassName="active"
					className="sidebar-column-menu-option">
					<FcShipped
						size={25}
						className="nav-icon"
					/>
					<h5>Vận chuyển</h5>
				</NavLink>
				<NavLink
					// exact
					// to="/moving"
					// activeClassName="active"
					className="sidebar-column-menu-option">
					<h5>Chuyển nhà</h5>
				</NavLink>
				<NavLink
					// exact
					// to="/flight"
					// activeClassName="active"
					className="sidebar-column-menu-option">
					{/* <img
						src={ticket}
						alt=""
						className="sidebar-icon-img"
						style={{ height: 50 }}
					/> */}
					<h5>Vé dịch vụ</h5>
				</NavLink>
				<div
					className="sidebar-column-menu-option"
					onClick={() => {
						navigate("/")
					}}>
					<FcDownLeft
						size={25}
						className="nav-icon"
					/>
					<h5>Đăng xuất</h5>
				</div>
				{/* <NavLink exact to="/shop" activeClassName="active" className="sidebar-column-menu-option">
                    <FcShop size={25} className="nav-icon" />
                    <h5>Mua / nhận đồ hộ</h5>
                </NavLink>
                <NavLink exact to="/tracking" activeClassName="active" className="sidebar-column-menu-option">
                    <FcTimeline size={25} className="nav-icon" />
                    <h5>Tra cứu đơn hàng</h5>
                </NavLink>
                <NavLink exact to="/property" activeClassName="active" className="sidebar-column-menu-option">
                    <FcDepartment size={25} className="nav-icon" />
                    <h5>Bất động sản</h5>
                </NavLink>
                <NavLink exact to="/livestream" className="sidebar-column-menu-option">
                    <FcWebcam size={25} className="nav-icon" />
                    <h5>Livestream</h5>
                </NavLink>
                <NavLink exact to="/plan" className="sidebar-column-menu-option">
                    <FcPlanner size={25} className="nav-icon" />
                    <h5>Kế hoạch</h5>
                </NavLink>
                <NavLink exact to="/finance" className="sidebar-column-menu-option">
                    <FcBarChart size={25} className="nav-icon" />
                    <h5>Tài chính</h5>
                </NavLink>
                <NavLink exact to="/finance" className="sidebar-column-menu-option">
                    <FcBarChart size={25} className="nav-icon" />
                    <h5>DW Chest</h5>
                </NavLink>
                <NavLink exact to="/finance" className="sidebar-column-menu-option">
                    <FcBarChart size={25} className="nav-icon" />
                    <h5>Công nghệ</h5>
                </NavLink> */}
			</div>
		</div>
	)
}
