import dayjs from "dayjs";

const planAPI = [
	{
		content: "Đi chơi với vợ",
		date: "2023-05-24",
		day: 24,
		id: 0,
		intervalTime: "05:15 - 06:30",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Người yêu tương lai", id: 11, chosen: "true" }],
		planTime: 5,
		planWeekDate: 3,
		tagChoice: { id: 5, color: "black", type: "Vợ" },
		timePicker: "05:15",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-24T05:15"),
		endTime: dayjs("2023-05-24T06:30"),
		dayChosen: new Date("2023-05-24"),
	},
	{
		content: "Đi chơi với người yêu",
		date: "2023-05-25",
		day: 25,
		id: 1,
		intervalTime: "02:35 - 04:50",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua quà",
		partner: [{ username: "Bồ", id: 12, chosen: "true" }],
		planTime: 2,
		planWeekDate: 4,
		tagChoice: { id: 4, color: "#4E49F5", type: "Người yêu" },
		timePicker: "02:35",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-25T02:35"),
		endTime: dayjs("2023-05-25T04:50"),
		dayChosen: new Date("2023-05-25"),
	},
	{
		content: "Đi chơi với bạn thân",
		date: "2023-05-26",
		day: 26,
		id: 2,
		intervalTime: "01:00 - 02:30",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn thân lắm", id: 13, chosen: "true" }],

		planTime: 1,
		planWeekDate: 5,
		tagChoice: { id: 3, color: "#05AD92", type: "Bạn thân" },
		timePicker: "01:00",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-26T01:00"),
		endTime: dayjs("2023-05-26T02:30"),
		dayChosen: new Date("2023-05-26"),
	},
	{
		content: "Đi chơi với bạn xém thân",
		date: "2023-05-27",
		day: 27,
		id: 3,
		intervalTime: "12:15 - 13:45",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn xém thân", id: 14, chosen: "true" }],
		planTime: 12,
		planWeekDate: 6,
		tagChoice: { id: 1, color: "#d80ac8", type: "Bạn xém thân" },
		timePicker: "12:15",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-27T12:15"),
		endTime: dayjs("2023-05-27T13:45"),
		dayChosen: new Date("2023-05-27"),
	},
	{
		content: "Đi chơi",
		date: "2023-05-28",
		day: 28,
		id: 4,
		intervalTime: "09:15 - 10:30",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Congratulation!",
		partner: [{ username: "Bạn đời", id: 15, chosen: "true" }],
		planTime: 9,
		planWeekDate: 7,
		tagChoice: {
			id: 2,
			color: "red",
			type: "Bạn rất thân",
		},
		timePicker: "09:15",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-28T09:15"),
		endTime: dayjs("2023-05-28T10:30"),
		dayChosen: new Date("2023-05-28"),
	},
	{
		content: "Đi chơi với bạn gần thân",
		date: "2023-05-29",
		day: 29,
		id: 5,
		intervalTime: "18:15 - 19:50",
		location: "Hồ Chí Minh",
		month: 4,
		note: "Nhớ mua nhẫn cưới",
		partner: [{ username: "Bạn gần thân", id: 16, chosen: "true" }],
		planTime: 18,
		planWeekDate: 2,
		tagChoice: { id: 0, color: "#98C378", type: "Bạn gần thân" },
		timePicker: "18:15",
		year: 2023,
		completed: false,
		startTime: dayjs("2023-05-29T18:15"),
		endTime: dayjs("2023-05-29T19:50"),
		dayChosen: new Date("2023-05-29"),
	},
];

const tagPlanAPI = [
	{
		id: 0,
		color: "#98C378",
		type: "Bạn gần thân",
		delete: false,
	},
	{
		id: 1,
		color: "#d80ac8",
		type: "Bạn xém thân",
		delete: false,
	},
	{
		id: 2,
		color: "red",
		type: "Bạn rất thân",
		delete: false,
	},
	{
		id: 3,
		color: "#05AD92",
		type: "Bạn thân",
		delete: false,
	},
	{
		id: 4,
		color: "#4E49F5",
		type: "Người yêu",
		delete: false,
	},
	{
		id: 5,
		color: "black",
		type: "Vợ",
		delete: false,
	},
];

export { tagPlanAPI, planAPI };
