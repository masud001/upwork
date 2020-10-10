var assetChart1 = document.getElementById("assetsChart1").getContext("2d");
var assetChart2 = document.getElementById("assetsChart2").getContext("2d");
var Doughnut = document
	.getElementById("assetsCompositionChart")
	.getContext("2d");
// colors
const assetsColors = {
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

const assetsMiscEquity = [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200];
const assetsNetCash = [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30];
const assetsInvestments = [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50];
const assetsHouseEquity = [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30];
const assetsxData = [
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

const assetsChart1 = new Chart(assetChart1, {
	type: "line",
	data: {
		labels: equityxData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: assetsColors.purple.fill,
				pointBackgroundColor: assetsColors.purple.stroke,
				borderColor: assetsColors.purple.stroke,
				pointHighlightStroke: assetsColors.purple.stroke,
				borderCapStyle: "butt",
				data: assetsHouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: assetsColors.darkBlue.fill,
				pointBackgroundColor: assetsColors.darkBlue.stroke,
				borderColor: assetsColors.darkBlue.stroke,
				pointHighlightStroke: assetsColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: assetsInvestments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: assetsColors.lightBlue.fill,
				pointBackgroundColor: assetsColors.lightBlue.stroke,
				borderColor: assetsColors.lightBlue.stroke,
				pointHighlightStroke: assetsColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: assetsNetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: assetsColors.green.fill,
				pointBackgroundColor: assetsColors.green.stroke,
				borderColor: assetsColors.green.stroke,
				pointHighlightStroke: assetsColors.green.stroke,
				data: assetsMiscEquity,
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

const assetsdoughnutChart = new Chart(Doughnut, {
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

const assetsMiscEquity2 = [26, 36, 42, 38, 40];
const assetsNetCash2 = [34, 44, 33, 24, 25];
const assetsInvestments2 = [16, 13, 25, 33, 40];
const assetsHouseEquity2 = [5, 9, 10, 9, 18];
const assetsxData2 = [2010, 2011, 2012, 2013, 2014];

const assetsmyChart2 = new Chart(assetChart2, {
	type: "line",
	data: {
		labels: assetsxData2,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: assetsColors.purple.fill,
				pointBackgroundColor: assetsColors.purple.stroke,
				borderColor: assetsColors.purple.stroke,
				pointHighlightStroke: assetsColors.purple.stroke,
				borderCapStyle: "butt",
				data: assetsHouseEquity2,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: assetsColors.darkBlue.fill,
				pointBackgroundColor: assetsColors.darkBlue.stroke,
				borderColor: assetsColors.darkBlue.stroke,
				pointHighlightStroke: assetsColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: assetsInvestments2,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: assetsColors.lightBlue.fill,
				pointBackgroundColor: assetsColors.lightBlue.stroke,
				borderColor: assetsColors.lightBlue.stroke,
				pointHighlightStroke: assetsColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: assetsNetCash2,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: assetsColors.green.fill,
				pointBackgroundColor: assetsColors.green.stroke,
				borderColor: assetsColors.green.stroke,
				pointHighlightStroke: assetsColors.green.stroke,
				data: assetsMiscEquity2,
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
