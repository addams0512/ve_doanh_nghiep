import React from "react"
import { useState } from "react"
import axios from "axios"
import { HiOutlinePlus } from "react-icons/hi"

import { BsPencilSquare } from "react-icons/bs"

function UploadImage(props) {
	let { containerName, imgContainer, editContainer, imgClassName } = props
	const [img, setImg] = useState()
	const presetKey = ""
	const [showImage, setShowImage] = useState(false)
	const [imageAlt, setImageAlt] = useState(true)
	const uploadImage = (e) => {
		const file = e.target.files[0]
		const server = ""
		const formImage = new FormData()
		formImage.append("file", file)
		formImage.append("preset_key", presetKey)
		axios
			.post(server, formImage)
			.then((res) => {
				setImageAlt(false)
				setShowImage(true)
				setImg(res.data)
			})
			.catch((e) => console.log(e))
	}

	return (
		<div className={containerName}>
			<label htmlFor="avatar-business">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
					}}
					className={imgContainer}>
					{imageAlt && (
						<HiOutlinePlus
							cursor="pointer"
							size={30}
							color="gray"
						/>
					)}
					{showImage && (
						<img
							className={imgClassName}
							src={img}
							alt=""
						/>
					)}
				</div>
			</label>
			<input
				onChange={uploadImage}
				type="file"
				id="avatar-business"
				name="avatar"
				accept="image/png, image/jpeg"
			/>

			<div className={editContainer}>
				<label
					style={{
						display: "flex",
						gap: "6px",
						cursor: "pointer",
						fontWeight: "bold",
						alignItems: "center",
					}}
					htmlFor="avatar-business">
					<BsPencilSquare
						cursor="pointer"
						size={20}
					/>
					Chỉnh sửa
				</label>
				<input
					onChange={uploadImage}
					type="file"
					id="avatar-business"
					name="avatar"
					accept="image/png, image/jpeg"
				/>
			</div>
		</div>
	)
}

export default UploadImage
