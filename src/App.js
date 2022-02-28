import React, { useState } from "react";
const randomNumber = Math.floor(Math.random() * 6) + 1;
function App() {
	const [playerone, setPlayerone] = useState(0);
	const [playertwo, setPlayertwo] = useState(0);
	console.log(randomNumber);
	return (
		<div
			className="container"
			style={{ marginRight: "5vw", marginLeft: "5vw" }}>
			<div className="row text-center">
				<div
					className="col-5"
					style={{ border: "2px solid black", backgroundColor: "lightblue" }}>
					<h1>Player 1</h1>
				</div>
				<div className="col-2 fs-1 mb-auto">
					<img src={"/" + randomNumber + ".svg"} height="75" width="75" />
				</div>
				<div
					className="col-5"
					style={{ border: "2px solid black", backgroundColor: "lightgreen" }}>
					<h1>Player 2</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
