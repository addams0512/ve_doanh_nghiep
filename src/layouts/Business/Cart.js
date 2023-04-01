import React from "react"
import "./Cart.css"
import { useState } from "react"
import { BiPlus } from "react-icons/bi"
import { BiMinus } from "react-icons/bi"
import Paid from "./Paid"
export default function Cart({ hideCart }) {
	const [number, setnumber] = useState(0)
	const [paidDisplay, setPaidDisplay] = useState(false)

	function removeCart() {
		hideCart()
	}

	function handleclick() {
		setCartDisplay(false)
	}

	const [cartDisplay, setCartDisplay] = useState(true)

	function clickme() {
		setnumber(number - 1)
	}

	function clickmeNOW() {
		setnumber(number + 1)
	}

	return (
		<>
			{cartDisplay ? (
				<div className="cart">
					<div className="cart-container">
						<div className="cart-box-heading">
							<div className="cart-box-heading-info">Giỏ hàng</div>
						</div>
						<div className="cart-box-body">
							<div className="cart-cart-items">
								<div className="cart-box-body-info-1">
									<div className="cart-box-body-option">
										<input
											className="cart-box-body-input"
											type="checkbox"></input>
									</div>
									<div className="cart-box-body-info">
										<div className="cart-box-body-square"></div>
										<div className="cart-box-body-content">
											<div className="cart-content1">Tên sản phẩm</div>
											<div className="cart-content2">Mô tả ngắn</div>
										</div>
									</div>
								</div>
								<div className="cart-box-body-info-2">
									<div className="cart-box-body-option-1">
										<BiMinus
											size={20}
											onClick={clickme}
										/>
										<div className="cart-box-body-number">{number}</div>
										<BiPlus
											size={20}
											onClick={clickmeNOW}
										/>
									</div>
									<div className="cart-box-body-price">500.000 VND</div>
								</div>
							</div>
							<div className="cart-cart-items">
								<div className="cart-box-body-info-1">
									<div className="cart-box-body-option">
										<input
											className="cart-box-body-input"
											type="checkbox"></input>
									</div>
									<div className="cart-box-body-info">
										<div className="cart-box-body-square"></div>
										<div className="cart-box-body-content">
											<div className="cart-content1">Tên sản phẩm</div>
											<div className="cart-content2">Mô tả ngắn</div>
										</div>
									</div>
								</div>
								<div className="cart-box-body-info-2">
									<div className="cart-box-body-option-1">
										<BiMinus
											size={20}
											onClick={clickme}
										/>
										<div className="cart-box-body-number">{number}</div>
										<BiPlus
											size={20}
											onClick={clickmeNOW}
										/>
									</div>
									<div className="cart-box-body-price">500.000 VND</div>
								</div>
							</div>
							<div className="cart-box-bottom">
								<button onClick={handleclick}>THANH TOÁN</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Paid hidePaid={removeCart} />
			)}
		</>
	)
}
