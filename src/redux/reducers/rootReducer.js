import { LOADING, ERROR, AUTH_SUCCESS, FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
	issues: [],
	pagesCount: 0,
	token: null,
	loading: false,
	error: false,
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: true, loading: false, issues: [], pagesCount: 0 };

		case AUTH_SUCCESS:
			return { ...state, token: action.payload, loading: false, error: false };

		case FETCH_SUCCESS:
			return { ...state, issues: action.issues, pagesCount: action.pagesCount, loading: false, error: false };

		default:
			return state;
	}
}
