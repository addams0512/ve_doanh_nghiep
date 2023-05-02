const inputs = [
	{
		id: 1,
		name: "Tên doanh nghiệp",
		nameData: "businessName",
		placeholder: "deedword",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 2,
		name: "Tên chủ doanh nghiệp",
		nameData: "businessOwner",
		placeholder: "Họ và tên",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 3,
		name: "MST",
		nameData: "taxCode",
		errorMessage: "(*) Trường này là bắt buộc",
		placeholder: "MST",
		required: false,
	},
	{
		id: 4,
		name: "CCCD/CMND chủ doanh nghiệp",
		nameData: "CIC",
		placeholder: "CCCD/CMND",
		errorMessage: "(*) Trường này là bắt buộc",
		required: false,
	},
	{
		id: 5,
		name: "Địa chỉ",
		nameData: "address",
		placeholder: "Số nhà, tên đường",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 6,
		name: "Phường",
		nameData: "ward",
		placeholder: "Phường",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 7,
		name: "Quận",
		nameData: "district",
		placeholder: "Quận",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 8,
		name: "Thành phố",
		nameData: "city",
		placeholder: "Thành phố",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
	{
		id: 9,
		name: "Lĩnh vực",
		nameData: "major",
		placeholder: "Lĩnh vực",
		errorMessage: "(*) Trường này là bắt buộc",
		required: true,
	},
];

function FormInput(props) {
	const {
		errorMessage,
		nameData,
		name,
		placeholder,
		onChange,
		inputProps,
		required,
	} = props;

	return (
		<div className="input-business-information">
			<label>{name}</label>
			<input
				{...inputProps}
				type="text"
				onChange={(e) => onChange(e)}
				name={nameData}
				placeholder={placeholder}
				required={required}
			/>
			<span>{errorMessage}</span>
		</div>
	);
}

export { inputs, FormInput };
