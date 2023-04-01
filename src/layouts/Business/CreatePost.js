import React from "react"
import "./CreatePost.css"
import Rating from "../../components/Business/Rating"
import { AiFillPicture } from "react-icons/ai"
import { AiOutlineTag } from "react-icons/ai"
export default function CreatePost({ post }) {
	const handlePreviewPost = () => {
		post()
	}
	return (
		<div className="create-post-createpost">
			<div className="create-post-container">
				<div className="create-post-container-heading">
					<div className="create-post-heading-1">
						<h4>TẠO BÀI VIẾT</h4>
					</div>
					<div className="create-post-heading-2">
						<div className="create-post-circles"></div>
						<div className="create-post-heading-info">
							<h3>Tên doanh nghiệp</h3>
							<h5>Lĩnh vực</h5>
							<div className="create-post-STAR">
								<Rating size="small" />
							</div>
							<div className="create-post-heading-info-3">Người đăng bài</div>
						</div>
					</div>
				</div>
				<div className="create-post-container-body">
					<div className="create-post-body-box">
						<textarea
							className="create-post-body-info"
							placeholder=" Nội dung..."></textarea>
					</div>
					<div className="create-post-container-bottom">
						<div className="create-post-bottom-info-1">
							<div className="create-post-bottom-info-2">
								<button className="create-post-bottom-info-2-option">
									<div className="create-post-option1">
										<AiFillPicture />
									</div>
									<div className="create-post-option2">
										{" "}
										Thêm ảnh, video vào bài viết
									</div>
								</button>
							</div>
							<div className="create-post-bottom-info-3">
								<button className="create-post-bottom-info-3-option">
									<div className="create-post-option1">
										<AiOutlineTag />
									</div>
									<div className="create-post-option2">
										{" "}
										Gán người dùng/tên doanh nghiệp
									</div>
								</button>
							</div>
						</div>
					</div>
					<div className="create-post-bottom-info-4">
						<div className="create-post-bottom-info4-option"></div>
						<div className="create-post-bottom-info4-option"></div>
						<div className="create-post-bottom-info4-option"></div>
						<div className="create-post-bottom-info4-option"></div>
					</div>
					<div className="create-post-bottom-info-5">Sắp xếp ảnh</div>
					<div className="create-post-bottom-info-6">
						<div className="create-post-box-1">
							<div className="create-post-box-1-inside1"></div>
							<div className="create-post-box-1-inside2"></div>
							<div className="create-post-box-1-inside3"></div>
						</div>
						<div className="create-post-box-2">
							<div className="create-post-box-1-inside1"></div>
							<div className="create-post-box-1-inside2"></div>
							<div className="create-post-box-1-inside3"></div>
						</div>
						<div className="create-post-box-3">
							<div className="create-post-box-1-inside1"></div>
							<div className="create-post-box-1-inside2"></div>
						</div>
					</div>

					<div className="create-post-bottom-info-7">
						<button onClick={handlePreviewPost}>XEM BÀI ĐĂNG</button>
					</div>
				</div>
			</div>
		</div>
	)
}
