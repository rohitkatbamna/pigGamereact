import React, { useState } from "react";
let randomNumber;
function rngenerator() {
	randomNumber = Math.floor(Math.random() * 6) + 1;
}
function App() {
	const [playerone, setPlayerone] = useState(0);
	const [playertwo, setPlayertwo] = useState(0);
	const [diceroll, setDiceroll] = useState(0);
	const [player, setPlayer] = useState(true);
	const [currentone, setCurrentone] = useState(0);
	const [currenttwo, setCurrenttwo] = useState(0);
	const [playnum, setPlaynum] = useState(1);
	const [playwin, setPlaywin] = useState("");
	const [disable, setDisable] = useState(false);

	function rollThedice() {
		if (playerone >= 100) {
			setPlaywin(" Player One Wins");
			setDisable(true);
			return;
		}
		if (playertwo >= 100) {
			setPlaywin("Player Two Wins");
			setDisable(true);
			return;
		}
		rngenerator();
		if (playnum === 1) {
			if (player === true) {
				if (randomNumber === 1) {
					setPlaynum(2);
					setCurrentone(0);
					setPlayer(false);
				} else {
					setCurrentone((prev) => prev + randomNumber);
				}
			}
		}
		if (playnum === 2) {
			if (player === false) {
				if (randomNumber === 1) {
					setCurrenttwo(0);
					setPlayer(true);
					setPlaynum(1);
				} else {
					setCurrenttwo((prev) => prev + randomNumber);
				}
			}
		}
		setDiceroll(randomNumber);
	}
	function onHold() {
		if (playerone >= 100) {
			setPlaywin(" Player One Wins");
			setDisable(true);
			return;
		}
		if (playertwo >= 100) {
			setPlaywin("Player Two Wins");
			setDisable(true);
			return;
		}
		setPlaynum(playnum === 1 ? 2 : 1);
		setPlayerone((prev) => prev + currentone);
		setCurrentone(0);
		setPlayertwo((prev) => prev + currenttwo);
		setCurrenttwo(0);
		setPlayer(player ? false : true);
	}
	function newgame() {
		setPlayerone(0);
		setPlayertwo(0);
		setCurrentone(0);
		setCurrenttwo(0);
		setDiceroll(0);
		setPlayer(true);
		setPlaynum(1);
		setPlaywin("");
		setDisable(false);
	}

	return (
		<>
			<div className="container-fluid">
				<div className="addmarginhere">
					<div className="row">
						<button
							type="button"
							className="btn btn-dark btn-lg col-4  mt-5 mb-5 ms-auto me-auto"
							onClick={newgame}>
							Start New game
						</button>
					</div>
					<div className="row text-center ms-auto me-auto">
						<div
							className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 mt-auto mb-auto ms-auto me-auto"
							style={{
								border: "2px solid black",
								backgroundColor: "lightblue",
								opacity: player ? 1 : 0.5,
							}}>
							<h1>Player 1</h1>
							<h1 style={{ fontSize: "50px" }}>{playerone}</h1>
							<h1 className="mt-5">Current</h1>
							<h1 className="mb-3">{currentone}</h1>
						</div>
						<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 fs-1 mt-5 ms-auto me-auto">
							<img
								src={"/" + diceroll + ".svg"}
								height="75"
								width="75"
								alt="Dice"
							/>
							<br />
							<button
								onClick={rollThedice}
								className="btn btn-dark btn-lg mt-3"
								disabled={disable}>
								Roll The Dice
							</button>
							<button
								className="btn btn-dark btn-lg mt-3"
								onClick={onHold}
								disabled={disable}>
								Hold
							</button>
						</div>
						<div
							className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 mt-auto mb-auto ms-auto me-auto"
							style={{
								border: "2px solid black",
								backgroundColor: "lightgreen",
								opacity: !player ? 1 : 0.5,
							}}>
							<h1>Player 2</h1>
							<h1 style={{ fontSize: "50px" }}>{playertwo}</h1>
							<h1 className="mt-5">Current</h1>
							<h1 className="mb-3">{currenttwo}</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-4 mt-5 ms-auto me-auto">
							<p className="fs-1 fw-bold text-center">{playwin}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
