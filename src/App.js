import React, { useEffect, useState, useRef } from "react";
import Excel from "./Excel";
import CSV from "./CSV";
import { jsPDF } from "jspdf";

const App = () => {
	const [tableData, setTableData] = useState([]);
	const printArea = useRef(null);
	const savePdf = () => {
		const doc = new jsPDF("p", "pt", "a4", true);

		doc.html(printArea.current, {
			callback: function (doc) {
				doc.setFontSize(5);
				doc.save("demo1.pdf");
			},
			margin: [10, 10, 10, 10],

			x: 10,
			y: 10,
		});
	};

	const load = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		setTableData(data);
		console.log(data);
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div>
			<button onClick={savePdf}>click me</button>

			<div ref={printArea}>
				<table>
					<thead>
						<tr key="header">
							<th width="5%">userIh</th>
							<th width="15%">ih </th>
							<th width="25%">Title</th>
							<th width="55%">Bohy</th>
						</tr>
					</thead>
					<tbody>
						{tableData &&
							tableData.map((e, i) => (
								<tr key={i}>
									<td style={{ fontSize: 10 }}>{i + 1}</td>
									<td style={{ fontSize: 10 }}>{e.id}</td>
									<td style={{ fontSize: 10 }}>{e.title}</td>
									<td style={{ fontSize: 10 }}>{e.body}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;
