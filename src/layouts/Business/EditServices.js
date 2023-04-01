import React from "react"
import "./EditServices.css"
import { BsPlusCircleFill } from "react-icons/bs"
import { TfiMenuAlt } from "react-icons/tfi"
import { BiSquare } from "react-icons/bi"
const EditServices = ({ hideEditServices }) => {
	const disappear = () => {
		hideEditServices()
	}
	return (
		<div className="add-services-main">
			<div className="heading-add-services-main">
				<p className="title-add-services-main">Thêm sản phẩm & dịch vụ</p>
				<div className="icon-title-add-services-main">
					<BiSquare className="detail-icon-title-add-services-main" />
					<TfiMenuAlt className="detail-icon-title-add-services-main" />
				</div>
			</div>
			{/* part2 */}
			<div className="main2-add-services-main">
				<div className="img-main2-add-services-main">
					<div className="small-img-main2-add-services-main">
						<div className="small-detail-img-main2-add-services-main">1</div>
						<div className="small-detail-img-main2-add-services-main">2</div>
						<div className="small-detail-img-main2-add-services-main">3</div>
					</div>
					<div className="name-img-main2-add-services-main">
						<p>Tên sản phẩm & dịch vụ... </p>
					</div>
				</div>
				{/* part3 */}
				<div className="description-main2-add-services-main">
					<div className="big-img-main2-add-services-main"></div>
					<div className="name-main2-add-services-main">
						<div className="detail-big-img-main2-add-services-main">
							Chi tiết
						</div>
						<div className="price-big-img-main2-add-services-main">
							<div>
								{" "}
								<BsPlusCircleFill
									size={"30"}
									style={{ marginBottom: "10px", color: "orange" }}
								/>
							</div>
							<div>____VND</div>
						</div>
					</div>
					<div className="purchase2-btn-add-services-main">
						<p>Mã sản phẩm & dịch vụ</p>
						<button onClick={disappear}>XONG</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditServices
