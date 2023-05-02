import React, { useEffect, useRef, useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
	const [input, setInput] = useState("");
	const [active, setActive] = useState(0);
	const [isShow, setIsShow] = useState(false);
	const [filtered, setFiltered] = useState([]);
	const selectRef = useRef(null);

	const setChange = () => {
		const selected = selectRef?.current?.querySelector(".isactive");
		if (selected) {
			selected?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		}
	};

	// show Plan and pass id for delete and edit
	const onClick = (id) => {
		setFiltered([]);
		setIsShow(false);
		props.showChoicePlan(id);
	};

	// handle Onchange
	const onChange = (e) => {
		const input = e.target.value;
		const { suggestions } = props;
		const newFilteredSuggestion = suggestions.filter((item) =>
			item.content.toLowerCase().includes(input.toLowerCase())
		);
		setActive(0);
		setFiltered(newFilteredSuggestion);
		setIsShow(true);
		setInput(e.target.value);
	};

	const onKeyDown = (e) => {
		// enter key
		if (e.keyCode === 13) {
			const selectedPlan = filtered[active];
			setActive(0);
			props.showChoicePlan(selectedPlan.id);
			setIsShow(false);
			setInput("");
		}
		// up arrow
		if (e.keyCode === 38) {
			setActive((active) => {
				if (active === 0) {
					return 0;
				}
				return active - 1;
			});
		}
		// down arrow
		if (e.keyCode === 40) {
			setActive((active) => {
				if (filtered.length === active) {
					return 0;
				}
				return active + 1;
			});
		}
	};

	// handleOutside click
	const handleOutsideClick = (e) => {
		if (selectRef.current && !selectRef.current.contains(e.target)) {
			setIsShow(false);
			setInput("");
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick, true);
	});

	// renderAutoCompleted
	const renderAutoCompleted = () => {
		if (isShow && input) {
			if (filtered.length) {
				return (
					<ul
						className="autocomplete"
						ref={selectRef}>
						{filtered.map((suggestion, index) => {
							let className;
							if (index === active) {
								className = "isactive";
							}
							setTimeout(() => setChange(), [100]);
							return (
								<li
									className={className}
									key={suggestion.id}
									onClick={() => onClick(suggestion.id)}>
									{suggestion.content}
								</li>
							);
						})}
					</ul>
				);
			}
		}
	};
	return (
		<div className="btn-search-calendar">
			<input
				placeholder={props.name}
				type="text"
				value={input}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
			{renderAutoCompleted()}
		</div>
	);
};

export default SearchBar;
