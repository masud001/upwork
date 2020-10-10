var balancesChart = document.getElementById("equityChart1").getContext("2d");
var balancesChart2 = document.getElementById("equityChart2").getContext("2d");
var Doughnut = document
	.getElementById("equityCompositionChart")
	.getContext("2d");
// colors
const equityColors = {
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

const equityMiscEquity = [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200];
const equityNetCash = [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30];
const equityInvestments = [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50];
const equityHouseEquity = [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30];
const equityxData = [
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

const equityChart = new Chart(balancesChart, {
	type: "line",
	data: {
		labels: equityxData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: equityColors.purple.fill,
				pointBackgroundColor: equityColors.purple.stroke,
				borderColor: equityColors.purple.stroke,
				pointHighlightStroke: equityColors.purple.stroke,
				borderCapStyle: "butt",
				data: equityHouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: equityColors.darkBlue.fill,
				pointBackgroundColor: equityColors.darkBlue.stroke,
				borderColor: equityColors.darkBlue.stroke,
				pointHighlightStroke: equityColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: equityInvestments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: equityColors.lightBlue.fill,
				pointBackgroundColor: equityColors.lightBlue.stroke,
				borderColor: equityColors.lightBlue.stroke,
				pointHighlightStroke: equityColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: equityNetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: equityColors.green.fill,
				pointBackgroundColor: equityColors.green.stroke,
				borderColor: equityColors.green.stroke,
				pointHighlightStroke: equityColors.green.stroke,
				data: equityMiscEquity,
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

const equitydoughnutChart = new Chart(Doughnut, {
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

const equityMiscEquity2 = [26, 36, 42, 38, 40];
const equityNetCash2 = [34, 44, 33, 24, 25];
const equityInvestments2 = [16, 13, 25, 33, 40];
const equityHouseEquity2 = [5, 9, 10, 9, 18];
const equityxData2 = [2010, 2011, 2012, 2013, 2014];

const equitymyChart2 = new Chart(balancesChart2, {
	type: "line",
	data: {
		labels: equityxData2,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: equityColors.purple.fill,
				pointBackgroundColor: equityColors.purple.stroke,
				borderColor: equityColors.purple.stroke,
				pointHighlightStroke: equityColors.purple.stroke,
				borderCapStyle: "butt",
				data: equityHouseEquity2,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: equityColors.darkBlue.fill,
				pointBackgroundColor: equityColors.darkBlue.stroke,
				borderColor: equityColors.darkBlue.stroke,
				pointHighlightStroke: equityColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: equityInvestments2,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: equityColors.lightBlue.fill,
				pointBackgroundColor: equityColors.lightBlue.stroke,
				borderColor: equityColors.lightBlue.stroke,
				pointHighlightStroke: equityColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: equityNetCash2,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: equityColors.green.fill,
				pointBackgroundColor: equityColors.green.stroke,
				borderColor: equityColors.green.stroke,
				pointHighlightStroke: equityColors.green.stroke,
				data: equityMiscEquity2,
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
