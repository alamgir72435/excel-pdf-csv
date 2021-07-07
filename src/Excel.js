import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
	{
		sl: 1,
		amount: 30000,
		assetName: "computer",
		date: "12/23/2021",
	},
	{
		sl: 2,
		amount: 355000,
		assetName: "F",
		date: "12/23/2021",
	},
	{
		sl: 3,
		amount: 250000,
		assetName: "computer",
		date: "12/23/2021",
	},
	{
		sl: 4,
		amount: 450500,
		assetName: "computer",
		date: "12/23/2021",
	},
];

function Excel() {
	return (
		<div className="App">
			<ExcelFile element={<button>export to excel</button>}>
				<ExcelSheet data={dataSet1} name="depriciations">
					<ExcelColumn label="Serial" value="sl" />
					<ExcelColumn label="Date" value="date" />
					<ExcelColumn label="asset Name" value="assetName" />
					<ExcelColumn label="Amount" value={"amount"} />
				</ExcelSheet>
			</ExcelFile>
		</div>
	);
}

export default Excel;
