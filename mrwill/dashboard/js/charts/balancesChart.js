var balancesChart = document.getElementById("balancesChart").getContext("2d");
var balancesChart2 = document.getElementById("balancesChart2").getContext("2d");
var Doughnut = document
	.getElementById("balancesCompositionChart")
	.getContext("2d");
// colors
const colors = {
	green: {
		fill: "#59A2CE",
		stroke: "#59A2CE",
	},
	lightBlue: {
		fill: "#FC974B",
		stroke: "#FC974B",
	},
	darkBlue: {
		fill: "#39E96C",
		stroke: "#39E96C",
	},
	purple: {
		fill: "#E84B4B",
		stroke: "#E84B4B",
	},
};

const MiscEquity = [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200];
const NetCash = [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30];
const Investments = [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50];
const HouseEquity = [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30];
const xData = [
	2010,
	2011,
	2012,
	2013,
	2014,
	2015,
	2016,
	2017,
	2018,
	2019,
	2020,
];

const MiscEquity2 = [26, 36, 42, 38, 40];
const NetCash2 = [34, 44, 33, 24, 25];
const Investments2 = [16, 13, 25, 33, 40];
const HouseEquity2 = [5, 9, 10, 9, 18];
const xData2 = [2010, 2011, 2012, 2013, 2014];

const myChart = new Chart(balancesChart, {
	type: "line",
	data: {
		labels: xData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: colors.purple.fill,
				pointBackgroundColor: colors.purple.stroke,
				borderColor: colors.purple.stroke,
				pointHighlightStroke: colors.purple.stroke,
				borderCapStyle: "butt",
				data: HouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: colors.darkBlue.fill,
				pointBackgroundColor: colors.darkBlue.stroke,
				borderColor: colors.darkBlue.stroke,
				pointHighlightStroke: colors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: Investments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: colors.lightBlue.fill,
				pointBackgroundColor: colors.lightBlue.stroke,
				borderColor: colors.lightBlue.stroke,
				pointHighlightStroke: colors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: NetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: colors.green.fill,
				pointBackgroundColor: colors.green.stroke,
				borderColor: colors.green.stroke,
				pointHighlightStroke: colors.green.stroke,
				data: MiscEquity,
			},
		],
	},
	options: {
		tooltips: { enabled: false },
		hover: { mode: null },
		responsive: true,
		elements: {
			point: {
				radius: 0,
			},
		},
		legend: {
			position: "bottom",
			align: "center",
			labels: {
				fontSize: 10,
				boxWidth: 10,
			},
		},
		// Can't just just `stacked: true` like the docs say
		scales: {
			yAxes: [
				{
					stacked: true,
				},
			],
		},
		animation: {
			duration: 750,
		},
	},
});

const doughnutChart = new Chart(Doughnut, {
	type: "doughnut",
	data: {
		labels: ["HouseEquity", "Investments", "NetCash", "MiscEquity"],
		datasets: [
			{
				label: "Din ledelsesstil",
				backgroundColor: ["#E84B4B", "#39E96C", "#FC974B", "#FC974B"],
				data: [54, 12, 9, 23],
			},
		],
	},
	options: {
		tooltips: { enabled: false },
		hover: { mode: null },
		responsive: true,
		legend: {
			display: false,
		},
	},
});

const myChart2 = new Chart(balancesChart2, {
	type: "line",
	data: {
		labels: xData2,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: colors.purple.fill,
				pointBackgroundColor: colors.purple.stroke,
				borderColor: colors.purple.stroke,
				pointHighlightStroke: colors.purple.stroke,
				borderCapStyle: "butt",
				data: HouseEquity2,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: colors.darkBlue.fill,
				pointBackgroundColor: colors.darkBlue.stroke,
				borderColor: colors.darkBlue.stroke,
				pointHighlightStroke: colors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: Investments2,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: colors.lightBlue.fill,
				pointBackgroundColor: colors.lightBlue.stroke,
				borderColor: colors.lightBlue.stroke,
				pointHighlightStroke: colors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: NetCash2,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: colors.green.fill,
				pointBackgroundColor: colors.green.stroke,
				borderColor: colors.green.stroke,
				pointHighlightStroke: colors.green.stroke,
				data: MiscEquity2,
			},
		],
	},
	options: {
		tooltips: { enabled: false },
		hover: { mode: null },
		responsive: true,
		elements: {
			point: {
				radius: 0,
			},
		},
		legend: {
			display: false,
		},
		// Can't just just `stacked: true` like the docs say
		scales: {
			yAxes: [
				{
					stacked: true,
				},
			],
		},
		animation: {
			duration: 750,
		},
	},
});
