import React, { useState } from "react"
import AboutUs from "../layouts/AboutUs"
import Hiring from "../layouts/Hiring"
import Services from "../layouts/Services"
import "./AboutBusiness.css"
import Rating from "./Rating"
import Post from "../layouts/Post"
import CreatePost from "../layouts/CreatePost"
import PreviewPost from "../layouts/PreviewPost"
import Cart from "../layouts/Cart"
const AboutBusiness = () => {
	const [aboutUsDisplay, setAboutUsDisplay] = useState(false)
	const [displayPost, setDisplayPost] = useState(true)
	const [displayServices, setDisplayServices] = useState(false)
	const [displayCreatePost, setDisplayCreatePost] = useState(false)
	const [displayPreviewPost, setDisplayPreviewPost] = useState(false)
	const [displayCart, setDisplayCart] = useState(false)
	const [HiringDisplay, setHiringDisplay] = useState(false)

	const Showme = () => {
		setHiringDisplay(true)
	}

	return (
		<>
			<div className="AboutBusiness">
				<div className="wallpaper">
					<img
						alt="img"
						className="img-wallpaper"></img>
					<div className="avatar">
						<div className="img-avatar"></div>
						<h3 className="name">Tên doanh nghiệp</h3>
						<div className="star">
							<Rating />
						</div>
						<p className="major">Lĩnh vực</p>
					</div>
				</div>
				<div className="actions">
					<div className="btn-like">
						<button type="">Thích</button>
					</div>
					<div className="btn-nav">
						<button className="btn-contact">Liên hệ</button>
						<button
							type="button"
							onClick={Showme}>
							Ứng tuyển
						</button>
					</div>
				</div>
				<div className="nav">
					<div className="subnav">
						<div
							style={
								displayPost
									? {
											backgroundColor: "rgb(248,168,89)",
											color: "white",
											border: "none",
									  }
									: {}
							}
							onClick={() => {
								setDisplayPost(true)
								setDisplayServices(false)
								setAboutUsDisplay(false)
							}}>
							Bài viết
						</div>
						<div
							style={
								displayServices
									? {
											background: "rgb(248,168,89)",
											color: "white",
											border: "none",
									  }
									: {}
							}
							className="services-btn"
							onClick={() => {
								setDisplayServices(true)
								setDisplayPost(false)
								setAboutUsDisplay(false)
							}}>
							Sản phẩm & Dịch vụ
						</div>
						<div
							style={
								aboutUsDisplay
									? {
											background: "rgb(248,168,89)",
											color: "white",
											border: "none",
									  }
									: {}
							}
							onClick={() => {
								setAboutUsDisplay(true)
								setDisplayServices(false)
								setDisplayPost(false)
							}}>
							Về chúng tôi
						</div>
					</div>
					<div className="cart-main">
						<div
							onClick={() => {
								setDisplayCart(true)
							}}
							className="cart-title">
							Giỏ hàng
						</div>
						<div className="quantity">1</div>
					</div>
				</div>
				<>
					{HiringDisplay && (
						<Hiring
							reset={() => {
								setHiringDisplay(false)
							}}
						/>
					)}
					{aboutUsDisplay && <AboutUs />}

					{displayServices && <Services />}
					{displayPost && (
						<Post
							createPost={() => {
								setDisplayCreatePost(true)
							}}
							managePost={() => {
								setAboutUsDisplay(false)
								setDisplayServices(false)
								setDisplayPost(false)
								setDisplayCreatePost(false)
							}}
						/>
					)}
					{displayCreatePost && (
						<CreatePost
							post={() => {
								setDisplayPreviewPost(true)
								setDisplayCreatePost(false)
							}}
						/>
					)}
					{displayPreviewPost && (
						<PreviewPost
							hideCreatePost={() => {
								setDisplayCreatePost(false)
								setDisplayPreviewPost(false)
								setDisplayPost(true)
							}}
						/>
					)}
					{displayCart && <Cart hideCart={() => setDisplayCart(false)} />}
				</>
			</div>
		</>
	)
}

export default AboutBusiness
