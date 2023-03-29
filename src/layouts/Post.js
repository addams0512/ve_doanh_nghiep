import React from "react"
import "./Post.css"
import { IoMdArrowDropdown } from "react-icons/io"
import { AiOutlineLike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { GrShare } from "react-icons/gr"
import { BsReply } from "react-icons/bs"
import { Rating } from "@mui/material"

const Post = ({ createPost, managePost }) => {
	const handleCreatePost = () => {
		createPost()
	}
	const handleManagePost = () => {
		managePost()
	}
	return (
		<div className="post">
			<div className="createPost-managePost-btn">
				{" "}
				<button onClick={handleCreatePost}> Tạo bài viết </button>
				<button
					className="managePost"
					onClick={handleManagePost}>
					{" "}
					Quản lý bài viết{" "}
				</button>
			</div>
			<div className="post-container">
				{/* content */}
				<div className="post-content">
					<div className="post-heading">
						<div className="avatar-content"></div>
						<div>
							<h3 className="post-title">Tên doanh nghiệp</h3>
							<p className="post-major">Lĩnh vực</p>
							<div>
								<Rating size="small" />
							</div>
							<p className="new-user">Người đăng bài</p>
						</div>
					</div>
					<div className="post-date">
						<p className="date-content">1/1/2023</p>
						<IoMdArrowDropdown size={30} />
					</div>
				</div>
				{/* description */}
				<div className="post-description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
					omnis nam blanditiis accusamus, libero nobis! Cumque et exercitationem
					magnam omnis velit provident nostrum quibusdam, esse autem voluptates
					accusantium vero officiis, deleniti, dignissimos enim aliquid!
					Molestias dicta fugiat nobis enim? Vel!
				</div>
				<div className="post-img"></div>
				<div className="post-navbar">
					<div className="like-comment">
						<div>
							<AiOutlineLike style={{ marginRight: "10px" }} />
							Thích
						</div>
						<div>
							<FaRegCommentDots style={{ marginRight: "10px" }} />
							Bình luận
						</div>
					</div>
					<div className="share">
						<GrShare style={{ marginRight: "10px" }} />
						Chia sẻ
					</div>
				</div>
				{/* comment */}
				<div className="post-comment">
					<div className="big-comment">
						<div className="user-comment-small">
							<div className="avatar-comment1"></div>
							<div>
								<h3 className="post-comment-title">Tên doanh nghiệp</h3>
								<p className="post-comment-major">Lĩnh vực</p>
							</div>
						</div>
						<div className="post-description-big">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
							omnis nam blanditiis accusamus, libero nobis! Cumque et
							exercitationem magnam omnis velit provident nostrum quibusdam,
							esse autem voluptates accusantium vero officiis, deleniti,
							dignissimos enim aliquid! Molestias dicta fugiat nobis enim? Vel!
						</div>
						<div className="big-like-comment-timerespond">
							<div className="like-big-comment">
								<div>
									<AiOutlineLike style={{ marginRight: "10px" }} />
									Thích
								</div>
								<div>
									<FaRegCommentDots style={{ marginRight: "10px" }} />
									Bình luận
								</div>
								<div>
									<BsReply style={{ marginRight: "8px" }} />
									Phản hồi
								</div>
							</div>
							<div className="timerespond-big-comment">5 minutes ago</div>
						</div>
					</div>
					<div className="small-comment">
						<div className="user-comment-small">
							<div className="avatar-comment1"></div>
							<div>
								<h3 className="post-comment-title">Tên doanh nghiệp</h3>
								<p className="post-comment-major">Lĩnh vực</p>
							</div>
						</div>
						<div className="post-description-small">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
							omnis nam blanditiis accusamus, libero nobis! Cumque et
							exercitationem magnam omnis velit provident nostrum quibusdam,
							esse autem voluptates accusantium vero officiis, deleniti,
							dignissimos enim aliquid! Molestias dicta fugiat nobis enim? Vel!
						</div>
						<div className="small-like-comment-timerespond">
							<div className="like-small-comment">
								<div>
									<AiOutlineLike style={{ marginRight: "10px" }} />
									Thích
								</div>
								<div>
									<FaRegCommentDots style={{ marginRight: "10px" }} />
									Bình luận
								</div>
								<div>
									<BsReply style={{ marginRight: "8px" }} />
									Phản hồi
								</div>
							</div>
							<div className="timerespond-small-comment">2 minutes ago</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
