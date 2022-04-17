import { configureStore, createSlice } from "@reduxjs/toolkit";
const firstState = {
	playerOne: 0,
	playerTwo: 0,
	diceroll: 0,
	player: true,
	currentone: 0,
	currenttwo: 0,
	playnum: 1,
	playwin: "",
	disable: true,
};
export const gameSlice = createSlice({
	name: "game",
	initialState: firstState,
	reducers: {
		changePlayer(state, action) {
			state.playnum = action.payload;
		},
		increaseCurrentonevalue(state, action) {
			state.currentone = state.currentone + action.payload;
		},
		setCurrentonevaluezero(state) {
			state.currentone = 0;
		},
		increaseCurrenttwovalue(state, action) {
			state.currenttwo = state.currenttwo + action.payload;
		},
		setCurrenttwovaluezero(state) {
			state.currenttwo = 0;
		},
		playerBool(state, action) {
			state.player = action.payload;
		},
		playerWinner(state, action) {
			if (action.payload === "one") {
				state.playwin = "Player One Wins";
			}
			if (action.payload === "two") {
				state.playwin = "Player Two Wins";
			}
			if (action.payload === "") {
				state.playwin = "";
			}
		},
		disableChange(state, action) {
			state.disable = action.payload;
		},
		diceRollchange(state, action) {
			state.diceroll = action.payload;
		},
		playerOnevaluechange(state, action) {
			state.playerOne = state.playerOne + action.payload;
		},
		playerTwovaluechange(state, action) {
			state.playerTwo = state.playerTwo + action.payload;
		},
		playerOnevaluezero(state) {
			state.playerOne = 0;
		},
		playerTwovaluezero(state) {
			state.playerTwo = 0;
		},
	},
});
export const gameActions = gameSlice.actions;
export const store = configureStore(gameSlice);
