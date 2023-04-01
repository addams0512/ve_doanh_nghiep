import * as React from "react"
// import Rating from "@material-ui/lab/Rating"
// import Box from "@material-ui/core/Box"

export default function BasicRating({ defaultValue, size }) {
	const [value, setValue] = React.useState(2)

	return (
		<></>
		// <Box
		// 	sx={{
		// 		"& > legend": { mt: 2 },
		// 	}}>
		// 	<Rating
		// 		defaultValue={defaultValue}
		// 		size={size}
		// 		name="simple-controlled"
		// 		value={value}
		// 		onChange={(event, newValue) => {
		// 			setValue(newValue)
		// 		}}
		// 	/>
		// </Box>
	)
}
