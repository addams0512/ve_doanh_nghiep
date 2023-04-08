import React from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {GrHistory} from "react-icons/gr"
import { useState } from "react"
import Kindofplan from "../../layouts/Calendar/Kindofplan"
const CreatePlan = ({ remove }) => {
	const handleCancel = () => {
		remove()
	}
	const [openfilekindofplan,setOpenFileKindOfPlan] =useState (true);
	const [openfilegotoplace,setOpenFileGoToPlace] = useState(false);
	function showfilegotoplace () {
		setOpenFileGoToPlace (true)
	}
	function showkindofplan () {
		setOpenFileKindOfPlan (false);	
        
	}
	const showCreatePlan = () => {
		setOpenFileKindOfPlan(true);
	}
	return (

		<div className="create-plan-container">
			{ openfilekindofplan ?  <div className="create-plan-box">
				<div className="create-plan-btn">Tạo kế hoạch</div>
				<input
					className="name-create-plan-input"
					type="text"
					placeholder="Đi ăn cùng vợ"
				/>
				<div className="type-create-plan-container">
					<div className="title-type-create-plan-container">
						<FaTags size={30} />
						<div className="title-type-create-plan">Loại kế hoạch</div>
					</div>
					<div className="tag-type-create-plan-container">
						<div className="tag-type-create-plan__box">
							<div className="tag-type-create-plan"></div>
							<div className="content-type-create-plan"> Công việc</div>
						</div>
						<div className="tag-type-create-plan__box">
							<div className="tag-type-create-plan"></div>
							<div className="content-type-create-plan"> Vợ</div>
						</div>
						<div className="tag-type-create-plan__box">
							<div className="tag-type-create-plan"></div>
							<div className="content-type-create-plan"> Sinh nhật</div>
						</div>
						<div className="tag-type-create-plan__box">
							<div className="tag-type-create-plan"></div>
							<div className="content-type-create-plan"> Sinh nhật</div>
						</div>
						<div onClick={showkindofplan}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<AiOutlinePlus size={26} />
						</div>
					</div>
				</div>
				<div className="time-create-plan-container">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}>
						<FaRegClock size={30} />
					</div>
					<div className="date-detail-create-plan-box">
						<div className="date-detail-create-plan-container">
							Chủ nhật, 7 tháng 8{" "}
						</div>
						<div className="toggle-date-create-plan-container">
							<div>
								<label class="switch">
									<input type="checkbox" />
									<span class="slider round"></span>
								</label>
							</div>
							<div className="content-create-plan-container">Cả ngày</div>
						</div>
						<div className="time-detail-create-plan-container">
							{" "}
							19:00 - 21:00
						</div>

						<div className="repeat-create-plan-container"> Lặp lại</div>
					</div>
				</div>
				<div className="go-together-create-plan-container">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}>
						<BsFillPersonFill size={30} />
					</div>
					<div onClick={showfilegotoplace} className="go-together-create-plan-box">Đi cùng (Share)</div>
				</div>
				<div className="location-create-plan-container">
					<div
						tyle={{
							display: "flex",
							justifyContent: "center",
						}}>
						<IoLocationSharp size={30} />
					</div>
					<div className="location-create-plan-box">Regent Phú Quốc</div>
				</div>
				<div className="notice-create-plan-container">
					<textarea
						rows=""
						cols=""
						placeholder="Chú thích"></textarea>
				</div>
				<div className="button-delete-create-plan-container">
					<button onClick={handleCancel}>Hủy</button>
					<button>Tạo</button>
				</div>
			</div>
			: <Kindofplan close={showCreatePlan}/>}
			{openfilegotoplace && <div className="go-to-palace-container">
				<div className="go-to-palace-tittle">
					<div className="go-to-palace-tittle-info">Đi cùng</div>
				</div>
				<div className="go-to-palace-search-bar">
					<div className="go-to-palace-search-all">
						<div className="go-to-palace-search-icon"><BiSearch size={20}/></div>
					    <input type="text" placeholder="Tìm bạn" className="go-to-palace-search-input"></input>
					</div>	
				</div>
			    <div className="go-to-palace-result">
					<div className="go-to-palace-result-icon"><GrHistory size={18}/></div>
					<div className="go-to-palace-result-info">	Gần nhất</div>
				</div>
				<div className="go-to-palace-result-name">
					<div className="go-to-palace-result-name-img"></div>
					<div className="go-to-palace-result-name-info"></div>
				</div>
                <div className="go-to-palace-btn-bottom">
                    <div className="go-to-palace-btn-cacel">
                        <button className="form-btn-cancel">Hủy</button>
                    </div>
                    <div className="go-to-palace-btn-create">
                        <button className="go-to-palace-form-btn-create">Tạo Tên</button>
                    </div>  
					<div className="go-to-palace-btn-add">
                        <button className="form-btn-add">Thêm</button>
                    </div>
                </div>
			</div>}
		</div>
		
		
	)
}

export default CreatePlan
