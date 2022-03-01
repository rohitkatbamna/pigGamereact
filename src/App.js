import React, { useState } from "react";
let randomNumber = Math.floor(Math.random() * 6) + 1;
function App() {
	const [playerone, setPlayerone] = useState(0);
	const [playertwo, setPlayertwo] = useState(0);
	const [diceroll, setDiceroll] = useState(randomNumber);
	const [player, setPlayer] = useState(true);
	const [currentone, setCurrentone] = useState(0);
	const [currenttwo, setCurrenttwo] = useState(0);
	const [playnum, setPlaynum] = useState(1);
	const [playwin, setPlaywin] = useState("");
	const [disable, setDisable] = useState(false);

	function checkwin() {
		if (playerone + currentone >= 10 || currentone >= 10) {
			setPlaywin(" Player One Wins");
			setDisable(true);
		}
		if (playertwo + currenttwo >= 10 || currenttwo >= 10) {
			setPlaywin("Player Two Wins");
			setDisable(true);
		}
	}
	function rollThedice() {
		checkwin();
		randomNumber = Math.floor(Math.random() * 6) + 1;
		setDiceroll(randomNumber);
		if (playnum === 1) {
			if (player === true) {
				if (randomNumber === 1) {
					setPlaynum(2);
					setCurrentone(0);
					setPlayer(false);
				} else {
					setCurrentone((prev) => prev + diceroll);
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
					setCurrenttwo((prev) => prev + diceroll);
				}
			}
		}
	}
	function onHold() {
		checkwin();
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
		setDiceroll(Math.floor(Math.random() * 6) + 1);
		setPlayer(true);
		setPlaynum(1);
		setPlaywin("");
		setDisable(false);
	}

	return (
		<>
			<div
				className="container"
				style={{ marginRight: "5vw", marginLeft: "5vw" }}>
				<div className="row text-center">
					<button
						type="button"
						className="btn btn-dark btn-lg col-4 ms-auto me-auto mt-5 mb-5"
						onClick={newgame}>
						Start New game
					</button>
				</div>
				<div className="row text-center">
					<div
						className="col-5 mt-auto mb-auto"
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
					<div className="col-2 fs-1 mt-5">
						<img
							src={"/" + diceroll + ".svg"}
							height="75"
							width="75"
							alt="Dice"
						/>
						<br />
						<button
							onClick={rollThedice}
							className="btn btn-dark btn-lg"
							disabled={disable}>
							Roll The Dice
						</button>
						<button
							className="btn btn-dark btn-lg"
							onClick={onHold}
							disabled={disable}>
							Hold
						</button>
					</div>
					<div
						className="col-5 mt-auto mb-auto"
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
		</>
	);
}

export default App;
