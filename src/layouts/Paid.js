import React from "react"
import "./Paid.css"
import { useState } from "react"
export default function Pay() {
	const [PayDisplay, setPayDisplay] = useState(true)
	function handleclick() {
		setPayDisplay(false)
	}
	return (
		<div className="pay-BOX-container">
			{PayDisplay && (
				<div className="pay-BOX">
					<div className="pay-Box-heading">
						<div className="pay-heading-info">Thanh toán</div>
					</div>
					<div className="pay-Box-body">
						<div style={{ display: "flex", alignContent: "space-between" }}>
							<div className="pay-body-left">
								<div className="pay-body-left-info">
									<p>Phương thức thanh toán</p>
								</div>
								<div className="pay-body-left-content">
									<input
										type="checkbox"
										className="pay-content"
									/>{" "}
									<div className="pay-content-1">Thẻ tín dụng</div>
								</div>
								<div className="pay-body-left-content">
									<input
										type="checkbox"
										className="pay-content"
									/>{" "}
									<div className="pay-content-1">
										Pre-payment (BankTransfer)
									</div>
								</div>
								<div className="pay-body-left-content">
									<input
										type="checkbox"
										className="pay-content"
									/>{" "}
									<div className="pay-content-1">COD</div>
								</div>
							</div>
							<div className="pay-body-right">
								<div className="pay-right-info">Mã giảm giá</div>
								<input
									type="text"
									className="pay-voucher"
								/>
								<div style={{ marginTop: 50 }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											lineHeight: 1.7,
										}}>
										<p>Giá tiền sản phẩm & dịch vụ</p>
										<p style={{ marginLeft: "auto" }}>2.000.000 VND</p>
									</div>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											lineHeight: 1.7,
										}}>
										<p>Vận chuyển</p>
										<p style={{ marginLeft: "auto" }}>30.000 VND</p>
									</div>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											lineHeight: 1.7,
										}}>
										<p>Mã giảm giá</p>
										<p style={{ marginLeft: "auto" }}>2.000.000 VND</p>
									</div>
									<div></div>
								</div>
								<div className="pay-right-info-6">
									<div style={{ display: "flex" }}>
										<div className="pay-right-info-7">Tổng</div>
										<div className="pay-right-info-8">2.000.000 VND</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pay-Box-bottom">
						<button onClick={handleclick}>THANH TOÁN</button>
					</div>
				</div>
			)}
		</div>
	)
}
