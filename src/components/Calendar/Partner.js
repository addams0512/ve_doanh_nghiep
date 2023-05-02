import React, { useContext, useEffect, useRef, useState } from "react";

// css
import "./Partner.css";

// icon
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { HiPlusSmall } from "react-icons/hi2";
import { DotSpinner } from "@uiball/loaders";

// data
import instance from "../../data/instance";

// context
import { PartnerContext } from "./CreatePlan";

export function Partner() {
	// context
	const { setPartnerChoice } = useContext(PartnerContext);

	// state
	const [displayMorePartner, setDisplayMorePartner] = useState(false);
	const [isShowPartner, setIsShowPartner] = useState(false);
	const [selectedUsers, setSelectedUsers] = useState([]);

	const [isShow, setIsShow] = useState(false);
	const [input, setInput] = useState("");
	const [filteredPartner, setFilteredPartner] = useState([]);
	const [active, setActive] = useState("");
	const selectedRef = useRef(null);

	// show partner form
	function showfilegotoplace() {
		setIsShowPartner(!isShowPartner);
	}

	// get User API
	const [userData, setUserData] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getUserData = async () => {
			try {
				const res = await instance.get("/users");
				setLoading(false);
				setUserData(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getUserData();
	}, []);

	// searchbar function
	const onSearchPartner = (e) => {
		const input = e.target.value;
		const filterPartner = userData.filter((partner) => {
			return partner.username.toLowerCase().includes(input.toLowerCase());
		});

		setActive(0);
		setFilteredPartner(filterPartner);
		setIsShow(true);
		setInput(input);
	};

	// onkey choice
	const onKeySearch = (e) => {
		const currentUser = filteredPartner[active];
		if (e.keyCode === 13) {
			setUserData(
				userData.map((user) => {
					if (user.id === currentUser?.id) {
						user.chosen = !user.chosen;
					}
					return user;
				})
			);
			setSelectedUsers((selectedUsers) => {
				const existingUser = selectedUsers.find(
					(user) => user.id === currentUser?.id
				);
				if (existingUser) {
					return selectedUsers.filter((user) => user.id !== currentUser?.id);
				}
				const newUser = userData.find((user) => user.id === currentUser?.id);

				return [...selectedUsers, newUser];
			});

			const selected = selectedUsers.filter((s) => {
				return s.chosen;
			});

			setPartnerChoice((partnerChoice) => {
				return [...partnerChoice, selected];
			});
		}
		// up arrow
		if (e.keyCode === 38) {
			setActive((active) => {
				if (active === 0) return 0;
				return (active = active - 1);
			});
		}
		// down arrow
		if (e.keyCode === 40) {
			setActive((active) => {
				if (filteredPartner.length === active) {
					return 0;
				}
				return (active = active + 1);
			});
		}
	};

	// scroll behavior
	const setChange = () => {
		const selected = selectedRef?.current?.querySelector(
			".go-to-palace-result-name-choice"
		);
		if (selected) {
			selected?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}
	};

	// partnerChoices
	const toggleUserSelection = (id) => {
		setUserData(
			userData.map((user) => {
				if (user.id === id) {
					user.chosen = !user.chosen;
				}
				return user;
			})
		);

		setSelectedUsers((selectedUsers) => {
			// check if partner is exist
			const existingUser = selectedUsers.find((user) => user.id === id);
			if (existingUser) {
				return selectedUsers.filter((user) => user.id !== id);
			}
			const newUser = userData.find((user) => user.id === id);

			return [...selectedUsers, newUser];
		});

		const selected = selectedUsers.filter((s) => {
			return s.chosen;
		});

		setPartnerChoice((partnerChoice) => {
			return [...partnerChoice, selected];
		});
	};

	const selected = selectedUsers.filter((s) => {
		return s.chosen;
	});

	function renderAutoComplete() {
		if (isShow) {
			if (filteredPartner.length) {
				return (
					<ul
						ref={selectedRef}
						className="go-together-user-container">
						{(input ? filteredPartner : selected).map((user, index) => {
							let className;
							if (active === index) {
								className = "go-to-palace-result-name-choice";
							}
							setTimeout(() => {
								setChange();
							}, [100]);
							return (
								<li
									style={user.chosen ? { backgroundColor: "#ccc" } : {}}
									onClick={() => {
										toggleUserSelection(user.id);
									}}
									key={user.id}
									className={className}>
									<div className="go-to-palace-result-name-img"></div>
									<div className="go-to-palace-result-name-info">
										{user.username}
									</div>
								</li>
							);
						})}
					</ul>
				);
			}
		}
	}

	return (
		<>
			{loading ? (
				<div className="loading">
					<DotSpinner
						size={100}
						speed={0.6}
						color="#ccc"
					/>
				</div>
			) : (
				<div className="go-together-create-plan-container">
					<div className="partner-create-plan-box">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<BsFillPersonFill size={30} />
						</div>
						<div
							onClick={showfilegotoplace}
							className={
								displayMorePartner
									? "more-partner-showing"
									: "go-together-create-plan-box"
							}>
							{(selected.length > 5 && displayMorePartner
								? selected
								: selected.slice(0, 4)
							).map((user) => {
								return (
									<div
										key={user.id}
										className="partner-together-item">
										{user.username},
									</div>
								);
							})}
						</div>
						<HiPlusSmall
							color="gray"
							style={{
								cursor: "pointer",
							}}
							onClick={showfilegotoplace}
							size={36}
						/>
					</div>
					{selected.length > 4 && (
						<div
							className="show-more-partner"
							onClick={() => setDisplayMorePartner(!displayMorePartner)}
							style={{
								cursor: "pointer",
								fontStyle: "italic",
								fontSize: "1rem	",
							}}>
							+ {selected.length > 4 ? selected.length - 4 : 0}
						</div>
					)}

					{/* partner  */}

					{isShowPartner && (
						<div className="go-to-palace-container">
							<div className="go-to-palace-tittle">
								<div className="go-to-palace-tittle-info">Đi cùng</div>
							</div>

							{/* search partner */}
							<div className="go-to-palace-search-bar">
								<div className="go-to-palace-search-all">
									<BiSearch size={20} />
									<input
										value={input}
										onChange={onSearchPartner}
										onKeyDown={onKeySearch}
										type="text"
										placeholder="Tìm bạn"
										className="go-to-palace-search-input"
									/>
								</div>
							</div>
							<div className="go-to-palace-result">
								<div className="go-to-palace-result-icon">
									<GrHistory size={18} />
								</div>
								<div className="go-to-palace-result-info"> Gần nhất</div>
							</div>

							{/* show partner */}
							{renderAutoComplete()}
							<div className="go-to-palace-btn-bottom">
								<div className="go-to-palace-btn-cancel">
									<button
										onClick={() => setIsShowPartner(false)}
										className="go-to-palace-form-btn-cancel">
										Hủy
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
}
