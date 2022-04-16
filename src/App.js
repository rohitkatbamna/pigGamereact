import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "./redux";

let randomNumber;
function rngenerator() {
	randomNumber = Math.floor(Math.random() * 6) + 1;
}
function App() {
	const dispatch = useDispatch();
	const playerone = useSelector((state) => state.playerOne);
	const playertwo = useSelector((state) => state.playerTwo);
	const diceroll = useSelector((state) => state.diceroll);
	const player = useSelector((state) => state.player);
	const currentone = useSelector((state) => state.currentone);
	const currenttwo = useSelector((state) => state.currenttwo);
	const playnum = useSelector((state) => state.playnum);
	const playwin = useSelector((state) => state.playwin);
	const disable = useSelector((state) => state.disable);

	function rollThedice() {
		if (playerone >= 100) {
			dispatch(gameActions.playerWinner("one"));
			dispatch(gameActions.disableChange(true));
			return;
		}
		if (playertwo >= 100) {
			dispatch(gameActions.playerWinner("two"));
			dispatch(gameActions.disableChange(true));
			return;
		}
		rngenerator();
		if (playnum === 1) {
			if (player === true) {
				if (randomNumber === 1) {
					dispatch(gameActions.setCurrentonevaluezero());
					dispatch(gameActions.playerBool(false));
					dispatch(gameActions.changePlayer(2));
				} else {
					dispatch(gameActions.increaseCurrentonevalue(randomNumber));
				}
			}
		}
		if (playnum === 2) {
			if (player === false) {
				if (randomNumber === 1) {
					dispatch(gameActions.setCurrenttwovaluezero());
					dispatch(gameActions.playerBool(true));
					dispatch(gameActions.changePlayer(1));
				} else {
					dispatch(gameActions.increaseCurrenttwovalue(randomNumber));
				}
			}
		}
		dispatch(gameActions.diceRollchange(randomNumber));
	}
	function onHold() {
		if (playerone >= 100) {
			dispatch(gameActions.playerWinner("one"));
			dispatch(gameActions.disableChange(true));
			return;
		}
		if (playertwo >= 100) {
			dispatch(gameActions.playerWinner("two"));
			dispatch(gameActions.disableChange(true));
			return;
		}
		dispatch(gameActions.changePlayer(playnum === 1 ? 2 : 1));
		dispatch(gameActions.playerOnevaluechange(currentone));
		dispatch(gameActions.setCurrentonevaluezero());
		dispatch(gameActions.playerTwovaluechange(currenttwo));
		dispatch(gameActions.setCurrenttwovaluezero());
		dispatch(gameActions.playerBool(player ? false : true));
	}
	function newgame() {
		dispatch(gameActions.playerOnevaluezero());
		dispatch(gameActions.playerTwovaluezero());
		dispatch(gameActions.setCurrentonevaluezero());
		dispatch(gameActions.setCurrenttwovaluezero());
		dispatch(gameActions.diceRollchange(0));
		dispatch(gameActions.playerBool(true));
		dispatch(gameActions.changePlayer(1));
		dispatch(gameActions.playerWinner(""));
		dispatch(gameActions.disableChange(false));
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
