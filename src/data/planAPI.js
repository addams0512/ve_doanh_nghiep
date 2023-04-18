const planAPI = [
	{
		content: "Đi chơi với vợ",
		date: "2023-04-20",
		day: 20,
		id: 0,
		intervalTime: "05:00 - 06:00",
		location: "Hồ Chí Minh",
		month: 3,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Người yêu tương lai", id: 11, chosen: "true" }],
		planTime: 5,
		planWeekDate: 5,
		tagChoice: { id: 5, color: "black", type: "Vợ" },
		timePicker: "05:00",
		year: 2023,
	},
	{
		content: "Đi chơi với người yêu",
		date: "2023-04-22",
		day: 22,
		id: 1,
		intervalTime: "02:00 - 03:00",
		location: "Hồ Chí Minh",
		month: 3,
		note: "Nhớ mua quà",
		partner: [{ username: "Bồ", id: 12, chosen: "true" }],
		planTime: 2,
		planWeekDate: 6,
		tagChoice: { id: 4, color: "#4E49F5", type: "Người yêu" },
		timePicker: "02:00",
		year: 2023,
	},
	{
		content: "Đi chơi với bạn thân",
		date: "2023-04-18",
		day: 18,
		id: 2,
		intervalTime: "01:00 - 02:00",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn thân lắm", id: 13, chosen: "true" }],

		planTime: 1,
		planWeekDate: 2,
		tagChoice: { id: 3, color: "#05AD92", type: "Bạn thân" },
		timePicker: "01:00",
		year: 2023,
	},
	{
		content: "Đi chơi với bạn xém thân",
		date: "2023-04-14",
		day: 14,
		id: 3,
		intervalTime: "12:00 - 13:00",
		location: "Hồ Chí Minh",
		month: 3,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn xém thân", id: 14, chosen: "true" }],
		planTime: 12,
		planWeekDate: 5,
		tagChoice: { id: 1, color: "#d80ac8", type: "Bạn xém thân" },
		timePicker: "12:00",
		year: 2023,
	},
	{
		content: "Đi dự lễ tốt nghiệp của cậu ấy",
		date: "2023-04-23",
		day: 23,
		id: 4,
		intervalTime: "9:00 - 10:00",
		location: "Hồ Chí Minh",
		month: 3,
		note: "Congratulation!",
		partner: [{ username: "Bạn đời", id: 15, chosen: "true" }],
		planTime: 9,
		planWeekDate: 1,
		tagChoice: {
			id: 2,
			color: "red",
			type: "Bạn rất thân",
		},
		timePicker: "9:00",
		year: 2023,
	},
	{
		content: "Đi chơi với bạn gần thân",
		date: "2023-04-30",
		day: 30,
		id: 5,
		intervalTime: "18:00 - 19:00",
		location: "Hồ Chí Minh",
		month: 3,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn gần thân", id: 16, chosen: "true" }],
		planTime: 18,
		planWeekDate: 2,
		tagChoice: { id: 0, color: "#EF4714", type: "Bạn gần thân" },
		timePicker: "18:00",
		year: 2023,
	},
]

const tagPlanAPI = [
	{
		id: 0,
		color: "#EF4714",
		type: "Bạn gần thân",
	},
	{ id: 1, color: "#d80ac8", type: "Bạn xém thân" },
	{
		id: 2,
		color: "red",
		type: "Bạn rất thân",
	},
	{ id: 3, color: "#05AD92", type: "Bạn thân" },
	{ id: 4, color: "#4E49F5", type: "Người yêu" },
	{ id: 5, color: "black", type: "Vợ" },
]

export { tagPlanAPI, planAPI }
