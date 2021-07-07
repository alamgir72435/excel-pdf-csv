import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
const csvData = [
	["firstname", "lastname", "email"],
	["Ahmed", "Tomi", "ah@smthing.co.com"],
	["Raed", "Labes", "rl@smthing.co.com"],
	["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

const CSV = () => {
	return (
		<>
			<CSVLink
				style={{ listStyle: "none", textDecoration: "none" }}
				data={csvData}
			>
				<button>Download csv</button>
			</CSVLink>
		</>
	);
};

export default CSV;
