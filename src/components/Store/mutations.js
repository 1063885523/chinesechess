export const MUTATION_TYPE = {
	SETPIECEPOS: 'setPiecePos',
};
export default {
	[MUTATION_TYPE.SETPIECEPOS](state, params) {
		if (params.id < 16) {
			state.pieceRed[params.index].pos = params.pos;
		} else {
			state.pieceBlack[params.index].pos = params.pos;
		}
	},
};